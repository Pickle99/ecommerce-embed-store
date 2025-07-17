const fastCsv = require('fast-csv')
const ExcelJS = require('exceljs')
import { Writable } from 'stream'
import { OrdersService } from '../orders/orders.service'

export class FileGeneratorService {
  constructor(
    private readonly storeId: string,
    private readonly apiKey: string,
    private readonly ordersService: OrdersService
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

  async streamCSV(
    products: any[],
    countMap: Record<number, number>,
    stream: Writable
  ): Promise<void> {
    const csvStream = fastCsv.format({
      headers: ['ID', 'Name', 'Price', 'Thumbnail', 'AddedFromRupToCartAndThenOrderedCount'],
    })

    csvStream.pipe(stream)

    for (const product of products) {
      const count = countMap[Number(product.id)] ?? 0
      csvStream.write({
        ID: product.id,
        Name: product.name,
        Price: product.defaultDisplayedPriceFormatted,
        Thumbnail: product.smallThumbnailUrl,
        AddedFromRupToCartAndThenOrderedCount: count,
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
      {
        header: 'Added to cart from RUP widget, and then ordered (how many times)',
        key: 'rupOrderedCount',
      },
    ]

    // Get counts
    const counts = await this.ordersService.getProductOrderCountsFromRupWidget()
    const countMap = Object.fromEntries(counts.map((c) => [c.productId, c.count]))

    // Merge count into products
    const productsWithCounts = products.map((product) => ({
      ...product,
      rupOrderedCount: countMap[product.id] || 0,
    }))

    sheet.addRows(productsWithCounts)

    await workbook.xlsx.write(stream)
  }
}
