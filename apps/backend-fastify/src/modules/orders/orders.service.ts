import { PrismaClient } from '@prisma/client'

export class OrdersService {
  private readonly prisma = new PrismaClient()

  constructor(
    private readonly storeId: string,
    private readonly apiKey: string
  ) {}

  async fetchOrdersFromEcwid(): Promise<any> {
    const res = await fetch(`https://app.ecwid.com/api/v3/${this.storeId}/orders`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      const errorBody = await res.text()
      throw new Error(`Failed to fetch orders: ${res.status} ${errorBody}`)
    }

    return await res.json()
  }

  async addExtraField(orderId: number, productId: number[]): Promise<void> {
    await this.prisma.recentlyUpdatedProductsFromOrder.create({
      data: {
        orderId,
        productId,
      },
    })
  }

  async getProductOrderCountsFromRupWidget() {
    const records = await this.prisma.recentlyUpdatedProductsFromOrder.findMany()

    const countMap: Record<number, number> = {}

    for (const record of records) {
      for (const productId of record.productId) {
        countMap[productId] = (countMap[productId] || 0) + 1
      }
    }

    return Object.entries(countMap).map(([productId, count]) => ({
      productId: Number(productId),
      count,
    }))
  }
}
