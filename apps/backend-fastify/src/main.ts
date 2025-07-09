import Fastify from 'fastify'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { fileURLToPath } from 'url'
import path from 'path'
import fastifyStatic from '@fastify/static'
import compress from '@fastify/compress'

dotenv.config()

const fastify = Fastify({ logger: false })
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const prisma = new PrismaClient()

fastify.register(cors, {
  origin: 'http://localhost:3000',
  credentials: true,
})

fastify.register(compress)

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../../frontend-vue/dist'),
  prefix: '/',
  cacheControl: true,
  maxAge: '1d',
})

fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

fastify.get('/time', async () => {
  const nowResult = await prisma.$queryRaw<{ now: Date }[]>`SELECT NOW() as now`
  return { now: nowResult[0].now }
})

fastify.get('/recently-updated-products', async (request, reply) => {
  try {
    const storeId = process.env.ECWID_STORE_ID
    const apiKey = process.env.ECWID_TOKEN

    if (!storeId || !apiKey) {
      return reply.code(500).send({ error: 'Missing Ecwid API credentials' })
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

    return { products: data.items }
  } catch (error) {
    console.error('Error fetching products:', error)
    return reply.code(500).send({ error: 'Unexpected server error' })
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: 8000 })
    console.log(chalk.green.bold('Server listening on http://localhost:8000 🚀'))
  } catch (err) {
    console.error(chalk.red('Error starting server:'), err)
    process.exit(1)
  }
}

start()
