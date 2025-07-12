import { FastifyInstance } from 'fastify'
import { RupController } from './rup.controller'

export async function rupRoutes(fastify: FastifyInstance) {
  const controller = new RupController()

  fastify.get('/rup-settings', controller.getSettings.bind(controller))
  fastify.put('/rup-toggle', controller.updateToggle.bind(controller))
  fastify.put('/rup-count', controller.updateCount.bind(controller))
  fastify.get('/recently-updated-products', controller.getRecentlyUpdatedProducts.bind(controller))
}
