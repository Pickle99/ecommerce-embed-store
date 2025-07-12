const fastCsv = require('fast-csv')
const ExcelJS = require('exceljs')
import { Writable } from 'stream'

export class FileGeneratorService {
  constructor(
    private readonly storeId: string,
    private readonly apiKey: string
  ) {}

  async fetchProducts(): Promise<any[]> {
    const res = await fetch(`https://app.ecwid.com/api/v3/${this.storeId}/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Accept: 'application/json',
      },
    })

    const data = await res.json()
    return data.items
  }

  filterProducts(products: any[], ids: number[]): any[] {
    return products.filter((p) => ids.includes(p.id))
  }

  streamCSV(products: any[], stream: Writable) {
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

  async streamXLSX(products: any[], stream: Writable): Promise<void> {
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
}
