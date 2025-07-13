import Fastify from 'fastify'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from '@fastify/cors'
import path from 'path'
import fastifyStatic from '@fastify/static'
import compress from '@fastify/compress'
import { fileGeneratorRoutes } from './modules/file-generators/file-generator.routes'
import { ordersRoutes } from './modules/orders/orders.routes'
import { rupRoutes } from './modules/recently-updated-products/rup.routes'

dotenv.config()

const fastify = Fastify({ logger: false })

fastify.register(cors, {
  origin: ['http://localhost:3000', 'http://localhost:3333'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
})

fastify.register(compress)

fastify.register(fastifyStatic, {
  root: path.resolve(__dirname, '../../frontend-vue/dist'),
  prefix: '/',
  cacheControl: true,
  maxAge: '10d',
})

fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

fastify.register(fileGeneratorRoutes, { prefix: '/api' })

fastify.register(ordersRoutes, { prefix: '/api' })

fastify.register(rupRoutes, { prefix: '/api' })

const start = async () => {
  try {
    fastify.listen({ port: 8000, host: '0.0.0.0' }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening on ${address} 🚀`)
    })
  } catch (err) {
    console.error(chalk.red('Error starting server:'), err)
    process.exit(1)
  }
}

start()
