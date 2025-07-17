import { FastifyRequest, FastifyReply } from 'fastify'
import { RupService } from './rup.service'
import { CountRequestType, QueryLimitType, ToggleRequestType } from './types'

export class RupController {
  private readonly service = new RupService()

  async getSettings(_: FastifyRequest, reply: FastifyReply) {
    const settings = await this.service.getSettings()
    if (!settings) return reply.code(404).send({ error: 'Settings not found' })
    return reply.send({ settings })
  }

  async updateToggle(request: FastifyRequest<{ Body: ToggleRequestType }>, reply: FastifyReply) {
    const { recently_updated_products_visibility } = request.body
    const updated = await this.service.updateVisibilityToggle(recently_updated_products_visibility)

    if (!updated) return reply.code(404).send({ error: 'Settings not found' })
    return reply.send({ updated })
  }

  async updateCount(request: FastifyRequest<{ Body: CountRequestType }>, reply: FastifyReply) {
    const { recently_updated_products_visibility_count } = request.body

    if (
      typeof recently_updated_products_visibility_count !== 'number' ||
      recently_updated_products_visibility_count < 1 ||
      recently_updated_products_visibility_count > 10
    ) {
      return reply.code(400).send({ error: 'Count must be between 1 and 10' })
    }

    const updated = await this.service.updateVisibilityCount(
      recently_updated_products_visibility_count
    )

    if (!updated) return reply.code(404).send({ error: 'Settings not found' })
    return reply.send({ updated })
  }

  async getRecentlyUpdatedProducts(
    request: FastifyRequest<{ Querystring: QueryLimitType }>,
    reply: FastifyReply
  ) {
    try {
      const storeId = process.env.ECWID_STORE_ID
      const apiKey = process.env.ECWID_TOKEN

      if (!storeId || !apiKey) {
        return reply.code(500).send({ error: 'Missing Ecwid API credentials' })
      }

      const settings = await this.service.getSettings()
      if (!settings) {
        return reply.code(404).send({ error: 'RUP Settings not found' })
      }

      if (!settings.recently_updated_products_visibility) {
        return reply.send({ products: [] })
      }
      const queries = `?sortBy=UPDATED_TIME_DESC&responseFields=items(id,name,defaultDisplayedPriceFormatted,imageUrl)`
      const products = await this.service.fetchProducts(storeId, apiKey, queries)
      const limit = request.query.limit ? parseInt(request.query.limit, 10) : undefined
      if (limit !== undefined && (isNaN(limit) || limit <= 0)) {
        return reply.code(400).send({ error: 'Invalid limit value' })
      }

      const count = limit ?? settings.recently_updated_products_visibility_count ?? 3

      const limitedProducts = products.items.slice(0, count)
      return reply.send({
        products: limitedProducts,
        defaultLimit: settings.recently_updated_products_visibility_count ?? 3,
      })
    } catch (err) {
      console.error('Error fetching RUP products:', err)
      return reply.code(500).send({ error: 'Unexpected server error' })
    }
  }

  async getProducts(request: FastifyRequest, reply: FastifyReply) {
    try {
      const storeId = process.env.ECWID_STORE_ID
      const apiKey = process.env.ECWID_TOKEN

      if (!storeId || !apiKey) {
        return reply.code(500).send({ error: 'Missing Ecwid API credentials' })
      }

      const query = request.query as { page?: string; perPage?: string }

      const perPage = parseInt(query.perPage || '10', 10)
      const page = parseInt(query.page || '1', 10)
      const offset = (page - 1) * perPage

      const queries = `?limit=${perPage}&offset=${offset}&sortBy=UPDATED_TIME_DESC&responseFields=total,items(id,name,description,defaultDisplayedPriceFormatted,smallThumbnailUrl,seoDescription)`

      const ecwidData = await this.service.fetchProducts(storeId, apiKey, queries)

      return reply.send({
        items: ecwidData.items || [],
        total: ecwidData.total || 0,
      })
    } catch (err) {
      console.error('Error fetching products:', err)
      return reply.code(500).send({ error: 'Unexpected server error' })
    }
  }
}
