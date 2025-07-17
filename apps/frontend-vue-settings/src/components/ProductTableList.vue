<template>
  <div class="toolbar" :style="products.length == 0 ? 'padding-bottom: 15rem' : ''">
    <button type="button" class="btn btn-default btn-medium" @click="downloadSelected('csv')">
      Export Selected products (CSV)
    </button>
    <button type="button" class="btn btn-default btn-medium" @click="downloadSelected('xlsx')">
      Export Selected products (XLSX)
    </button>
  </div>

  <div v-if="products.length > 0" class="filtered-list__items long-list">
    <div
      v-for="item in products"
      :key="item.id"
      class="list-element list-element--compact list-element--has-hover"
    >
      <div class="list-element__toggle">
        <input
          type="checkbox"
          :value="item.id"
          v-model="selectedItems"
          :id="item.id.toString()"
          tabindex="0"
          class="list-element__toggle-checkbox"
        />
        <label
          :for="item.id.toString()"
          class="list-element__toggle-label"
          style="cursor: pointer"
        ></label>
      </div>
      <div class="list-element__image">
        <img :src="item.smallThumbnailUrl" />
      </div>
      <div class="list-element__content">
        <div class="list-element__info">
          <div class="list-element__header">
            <div class="list-element__main-info">
              <div class="list-element__title">
                <span>{{ item.name }}</span>
              </div>
              <div class="list-element__description">
                <span v-if="orderCounts[item.id]" class="muted"
                  >Added to cart and ordered - {{ orderCounts[item.id] || 0 }} times
                </span>
              </div>
            </div>
          </div>
          <div class="list-element__data-row">
            {{ item.seoDescription.split('.')[0] + '.' }}
          </div>
        </div>
        <div class="list-element__actions">
          <div class="list-element__price">{{ item.defaultDisplayedPriceFormatted }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'

const props = defineProps<{
  products: {
    id: number
    name: string
    description: string
    defaultDisplayedPriceFormatted: string
    smallThumbnailUrl: string
    seoDescription: string
  }[]
}>()

const { data: RupProductsFromOrderData } = useFetch(
  'http://localhost:8000/api/rup-products-from-order'
).json()

const orderCounts = computed(() => {
  if (!RupProductsFromOrderData.value) return {}
  return Object.fromEntries(
    RupProductsFromOrderData.value.map((item: { productId: number; count: number }) => [
      item.productId,
      item.count,
    ])
  )
})

const selectedItems = ref<number[]>([])

async function downloadSelected(type: string) {
  if (selectedItems.value.length === 0) {
    alert('No items selected')
    return
  }

  const response = await fetch('/api/generate-file-proxy', {
    // we are using proxy here, check vite.config.ts
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ids: selectedItems.value, fileType: type }),
  })

  if (!response.ok) {
    console.error('Fetch failed:', await response.text())
    return
  }

  const blob = await response.blob()
  const url = window.URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `products.${type}`
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
</script>
