<template>
  <div class="toolbar" :style="products.length == 0 ? 'padding-bottom: 15rem' : ''">
    <button type="button" class="btn btn-default btn-medium" @click="downloadSelected('csv')">
      Export Selected products (CSV)
    </button>
    <button type="button" class="btn btn-default btn-medium" @click="downloadSelected('xlsx')">
      Export Selected products (XLSX)
    </button>
  </div>
  <div class="vertical-filters__sticky-panel">
    <button type="button" class="btn btn-success btn-medium">Show Products</button>
  </div>
  <div class="ecwid-orders__filter-panel vertical-filters">
    <div class="vertical-filters__names-list">
      <div>
        <div class="vertical-filters__filter-list-item visited">
          <div class="vertical-filters__filter-name">All products</div>
          <div class="vertical-filters__filter-count">126</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Displayed on storefront</div>
          <div class="vertical-filters__filter-count">27</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Out of stock</div>
          <div class="vertical-filters__filter-count">8</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
        <div class="vertical-filters__filter-list-item">
          <div class="vertical-filters__filter-name">Disabled</div>
          <div class="vertical-filters__filter-count">99</div>
          <div class="vertical-filters__filter-close"></div>
        </div>
      </div>
    </div>

    <div class="vertical-filters__save-panel">
      <div class="vertical-filters__save-panel-link">
        <a href="">Save Filter</a>
      </div>
      <div class="vertical-filters__save-panel-body">
        <div class="fieldset">
          <div class="field field--small">
            <span class="fieldset__svg-icon"></span>
            <label class="field__label">Filter name</label>
            <input type="text" class="field__input filter-name" tabindex="4" maxlength="64" />
            <div class="field__placeholder">Filter name</div>
            <span class="field-state--success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26px"
                height="26px"
                viewBox="0 0 26 26"
                focusable="false"
              >
                <path
                  d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                ></path>
              </svg>
            </span>
            <span class="field-state--close">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 16 16"
                enable-background="new 0 0 16 16"
                xml:space="preserve"
                focusable="false"
              >
                <path
                  d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <button class="btn btn-default btn-medium vertical-filters__save-panel-button">Save</button>
      </div>
    </div>
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
        <label :for="item.id.toString()" class="list-element__toggle-label"></label>
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
