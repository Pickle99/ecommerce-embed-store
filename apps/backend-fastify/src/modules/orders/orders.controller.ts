import { FastifyRequest, FastifyReply } from 'fastify'
import { OrdersService } from './orders.service'
import { AddRupExtraFieldRequestType } from './types'

export class OrdersController {
  private readonly service: OrdersService

  constructor() {
    const storeId = process.env.ECWID_STORE_ID!
    const apiKey = process.env.ECWID_TOKEN!
    this.service = new OrdersService(storeId, apiKey)
  }

  async getOrdersFromRup(request: FastifyRequest, reply: FastifyReply) {
    try {
      const orders = await this.service.fetchOrdersFromEcwid()
      return reply.send(orders)
    } catch (error: any) {
      console.error('Error fetching Ecwid orders:', error)
      return reply.code(500).send({ error: error.message || 'Unexpected server error' })
    }
  }

  async postOrderedFromRup(
    request: FastifyRequest<{ Body: AddRupExtraFieldRequestType }>,
    reply: FastifyReply
  ) {
    const { orderId, productId } = request.body

    try {
      await this.service.addExtraField(orderId, productId)
      return reply.code(200).send({ success: true })
    } catch (err) {
      console.error('Error storing extra field:', err)
      return reply.code(500).send({ error: 'Failed to store data' })
    }
  }

  async getProductOrderCountsWhichWereAddedFromRupWidget(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const formatted = await this.service.getProductOrderCountsFromRupWidget()
      return reply.send(formatted)
    } catch (error) {
      console.error(error)
      return reply.code(500).send({ error: 'Failed to fetch product order counts' })
    }
  }
}
