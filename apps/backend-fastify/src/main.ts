import Fastify from 'fastify'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { fileURLToPath } from 'url'
import path from 'path'
import fastifyStatic from '@fastify/static'
import compress from '@fastify/compress'
import { appRoutes } from './routes/app.routes'
import { fileGeneratorRoutes } from './modules/file-generators/file-generator.routes'

dotenv.config()

const fastify = Fastify({ logger: false })
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const prisma = new PrismaClient()

fastify.register(cors, {
  origin: ['http://localhost:3000', 'http://localhost:3333'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
})

fastify.register(compress)

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../../frontend-vue/dist'),
  prefix: '/',
  cacheControl: true,
  maxAge: '10d',
})

fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

fastify.register(appRoutes)

fastify.register(fileGeneratorRoutes, { prefix: '/api' })

fastify.get('/time', async () => {
  const nowResult = await prisma.$queryRaw<{ now: Date }[]>`SELECT NOW() as now`
  return { now: nowResult[0].now }
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
