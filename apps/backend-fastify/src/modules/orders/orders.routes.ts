import { FastifyInstance } from 'fastify'
import { OrdersController } from './orders.controller'

export async function ordersRoutes(fastify: FastifyInstance) {
  const controller = new OrdersController()

  fastify.get('/orders-from-rup', controller.getOrdersFromRup.bind(controller))
  fastify.post('/ordered-from-rup', controller.postOrderedFromRup.bind(controller))
  fastify.get(
    '/rup-products-from-order',
    controller.getProductOrderCountsWhichWereAddedFromRupWidget.bind(controller)
  )
}
