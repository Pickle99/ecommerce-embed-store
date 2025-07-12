import { PrismaClient } from '@prisma/client'

export class RupService {
  private readonly prisma = new PrismaClient()

  async getSettings() {
    return this.prisma.settings.findFirst({
      select: {
        recently_updated_products_visibility: true,
        recently_updated_products_visibility_count: true,
      },
    })
  }

  async updateVisibilityToggle(value: boolean) {
    const existing = await this.prisma.settings.findFirst()
    if (!existing) return null

    return this.prisma.settings.update({
      where: { id: existing.id },
      data: { recently_updated_products_visibility: value },
    })
  }

  async updateVisibilityCount(value: number) {
    const existing = await this.prisma.settings.findFirst()
    if (!existing) return null

    return this.prisma.settings.update({
      where: { id: existing.id },
      data: { recently_updated_products_visibility_count: value },
    })
  }

  async fetchRecentlyUpdatedProducts(storeId: string, apiKey: string) {
    const res = await fetch(`https://app.ecwid.com/api/v3/${storeId}/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      const errorBody = await res.text()
      throw new Error(`Failed to fetch Ecwid products: ${errorBody}`)
    }

    const data = await res.json()
    return data.items || []
  }
}
