import { FastifyRequest, FastifyReply } from 'fastify'
import { FileGeneratorService } from './file-generator.service'
import { GenerateFileRequestType } from './types'

export class FileGeneratorController {
  async handleGenerateFile(request: FastifyRequest, reply: FastifyReply) {
    const { ids, fileType } = request.body as GenerateFileRequestType

    if (!ids || !Array.isArray(ids) || !fileType) {
      return reply.status(400).send({ error: 'Invalid payload' })
    }

    const storeId = process.env.ECWID_STORE_ID!
    const apiKey = process.env.ECWID_TOKEN!

    const service = new FileGeneratorService(storeId, apiKey)

    try {
      const allProducts = await service.fetchProducts()
      const filtered = service.filterProducts(allProducts, ids)

      if (!filtered.length) {
        return reply.status(404).send({ error: 'No matching products found' })
      }

      if (fileType === 'csv') {
        reply
          .header('Content-Disposition', 'attachment; filename=products.csv')
          .header('Content-Type', 'text/csv')

        service.streamCSV(filtered, reply.raw)
      } else if (fileType === 'xlsx') {
        reply
          .header('Content-Disposition', 'attachment; filename=products.xlsx')
          .header(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          )

        await service.streamXLSX(filtered, reply.raw)
        if (!reply.raw.writableEnded) {
          reply.raw.end()
        }
      }
    } catch (err) {
      console.error(err)
      reply.status(500).send({ error: 'File generation failed' })
    }
  }
}
