import { FastifyInstance, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { addRUPExtraFieldToOrder } from '../services'

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

type Params = {
  orderId: string
}

type AddRupExtraFieldDto = {
  orderId: number
  productId: number[]
}

// RUP - stands for recently updated products (just shortened)

export async function appRoutes(fastify: FastifyInstance) {
  fastify.get('/rup-settings', async (_, reply) => {
    const settings = await prisma.settings.findFirst({
      select: {
        recently_updated_products_visibility: true,
        recently_updated_products_visibility_count: true,
      },
    })

    if (!settings) {
      return reply.code(404).send({ error: 'Settings not found' })
    }

    return { settings }
  })

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

      // Parse query string: ?limit=3
      const query = request.query as { limit?: string }
      const limitFromQuery = query.limit ? parseInt(query.limit, 10) : undefined

      if (limitFromQuery !== undefined && (isNaN(limitFromQuery) || limitFromQuery <= 0)) {
        return reply.code(400).send({ error: 'Invalid limit value' })
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
      const count = limitFromQuery ?? settings.recently_updated_products_visibility_count

      return {
        products: (data.items ?? [])
          .sort(
            (a: { updateTimestamp: number }, b: { updateTimestamp: number }) =>
              b.updateTimestamp - a.updateTimestamp
          )
          .slice(0, count),
        defaultLimit: settings.recently_updated_products_visibility_count ?? 3,
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      return reply.code(500).send({ error: 'Unexpected server error' })
    }
  })

  fastify.get('/orders-from-rup', async (request, reply) => {
    try {
      const storeId = process.env.ECWID_STORE_ID
      const apiKey = process.env.ECWID_TOKEN

      if (!storeId || !apiKey) {
        return reply.code(500).send({ error: 'Missing Ecwid API credentials' })
      }

      const res = await fetch(`https://app.ecwid.com/api/v3/${storeId}/orders`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
        },
      })

      console.log(res, 'res')

      if (!res.ok) {
        const errorBody = await res.text()
        return reply
          .code(res.status)
          .send({ error: 'Failed to fetch products from Ecwid', body: errorBody })
      }

      const data = await res.json()
      return reply.send(data)
    } catch (error) {
      console.error('Error fetching Ecwid products:', error)
      return reply.code(500).send({ error: 'Unexpected server error' })
    }
  })

  fastify.post<{ Body: AddRupExtraFieldDto }>('/ordered-from-rup', async (request, reply) => {
    const { orderId, productId } = request.body

    await prisma.recentlyUpdatedProductsFromOrder.create({
      data: {
        orderId,
        productId,
      },
    })

    return reply.code(200)
  })
}
