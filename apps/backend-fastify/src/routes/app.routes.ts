import { FastifyInstance, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type ToggleRequest = FastifyRequest<{
  Body: {
    recently_updated_products_visibility: boolean
  }
}>

type CountRequest = FastifyRequest<{
  Body: {
    recently_updated_products_visibility_count: number
  }
}>

// RUP - stands for recently updated products (just shortened)

export async function appRoutes(fastify: FastifyInstance) {
  fastify.put('/rup-toggle', async (request: ToggleRequest, reply) => {
    const { recently_updated_products_visibility } = request.body

    const existing = await prisma.settings.findFirst()
    if (!existing) {
      return reply.code(404).send({ error: 'Settings not found' })
    }

    const updated = await prisma.settings.update({
      where: { id: existing.id },
      data: { recently_updated_products_visibility },
    })

    return { updated }
  })

  fastify.put('/rup-count', async (request: CountRequest, reply) => {
    const { recently_updated_products_visibility_count } = request.body

    const existing = await prisma.settings.findFirst()
    if (!existing) {
      return reply.code(404).send({ error: 'Settings not found' })
    }

    const updated = await prisma.settings.update({
      where: { id: existing.id },
      data: { recently_updated_products_visibility_count },
    })

    return { updated }
  })

  fastify.get('/recently-updated-products', async (request, reply) => {
    try {
      const storeId = process.env.ECWID_STORE_ID
      const apiKey = process.env.ECWID_TOKEN

      if (!storeId || !apiKey) {
        return reply.code(500).send({ error: 'Missing Ecwid API credentials' })
      }

      const settings = await prisma.settings.findFirst({
        select: {
          recently_updated_products_visibility: true,
          recently_updated_products_visibility_count: true,
        },
      })

      if (!settings) {
        return reply.code(404).send({ error: 'RUP Settings not found' })
      }

      if (!settings.recently_updated_products_visibility) {
        return { products: [] }
      }

      const res = await fetch(`https://app.ecwid.com/api/v3/${storeId}/products`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
        },
      })

      if (!res.ok) {
        const errorBody = await res.text()
        return reply.code(res.status).send({ error: 'Failed to fetch from Ecwid', body: errorBody })
      }

      const data = await res.json()
      const count = settings.recently_updated_products_visibility_count

      return {
        products: (data.items ?? []).slice(0, count),
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      return reply.code(500).send({ error: 'Unexpected server error' })
    }
  })
}
