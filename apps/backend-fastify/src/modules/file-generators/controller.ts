import { FastifyRequest, FastifyReply } from 'fastify'
import { GenerateFileRequestDto } from './dto/generate-file-request.dto'
import { fetchProducts, streamCSV, streamXLSX } from './service'

export async function generateFileHandler(request: FastifyRequest, reply: FastifyReply) {
  const { ids, fileType } = request.body as GenerateFileRequestDto

  if (!ids || !Array.isArray(ids) || !fileType) {
    return reply.status(400).send({ error: 'Invalid payload' })
  }

  const storeId = process.env.ECWID_STORE_ID!
  const apiKey = process.env.ECWID_TOKEN!

  try {
    const allProducts = await fetchProducts(storeId, apiKey)
    const filtered = allProducts.filter((p: any) => ids.includes(p.id))

    if (!filtered.length) {
      return reply.status(404).send({ error: 'No matching products found' })
    }

    if (fileType === 'csv') {
      reply
        .header('Content-Disposition', 'attachment; filename=products.csv')
        .header('Content-Type', 'text/csv')

      streamCSV(filtered, reply.raw)
    } else if (fileType === 'xlsx') {
      reply
        .header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        .header('Content-Disposition', 'attachment; filename=products.xlsx')

      await streamXLSX(filtered, reply.raw)

      if (!reply.raw.writableEnded) {
        reply.raw.end()
      }
    }

    return
  } catch (err) {
    console.error(err)
    reply.status(500).send({ error: 'File generation failed' })
  }
}
