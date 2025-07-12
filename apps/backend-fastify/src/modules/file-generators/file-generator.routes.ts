import { FastifyInstance } from 'fastify'
import { FileGeneratorController } from './file-generator.controller'

export async function fileGeneratorRoutes(fastify: FastifyInstance) {
  const controller = new FileGeneratorController()

  fastify.post('/generate-file', controller.handleGenerateFile.bind(controller))
}
