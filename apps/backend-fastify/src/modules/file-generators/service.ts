const fastCsv = require('fast-csv')
const ExcelJS = require('exceljs')
import { Writable } from 'stream'

export async function fetchProducts(storeId: string, apiKey: string) {
  const res = await fetch(`https://app.ecwid.com/api/v3/${storeId}/products`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
  })

  const data = await res.json()
  return data.items
}

export function streamCSV(products: any[], stream: Writable) {
  const csvStream = fastCsv.format({ headers: true })

  csvStream.pipe(stream)

  for (const product of products) {
    csvStream.write({
      ID: product.id,
      Name: product.name,
      Price: product.defaultDisplayedPriceFormatted,
      Thumbnail: product.smallThumbnailUrl,
    })
  }

  csvStream.end()
}

export async function streamXLSX(products: any[], stream: Writable) {
  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet('Products')

  sheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Price', key: 'defaultDisplayedPriceFormatted' },
    { header: 'Thumbnail', key: 'smallThumbnailUrl' },
  ]

  sheet.addRows(products)

  await workbook.xlsx.write(stream)
}
