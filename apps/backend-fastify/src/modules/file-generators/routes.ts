import { FastifyInstance } from 'fastify'
import { generateFileHandler } from './controller'

export async function fileGeneratorRoutes(fastify: FastifyInstance) {
  fastify.post('/generate-file', generateFileHandler)
}
