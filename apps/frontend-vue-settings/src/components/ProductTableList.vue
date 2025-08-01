<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    "
  >
    <div
      class="toolbar"
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
      "
    >
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem">
        <button
          type="button"
          class="btn btn-default btn-medium"
          style="min-width: 12rem"
          @click="downloadSelected('csv')"
        >
          Export Selected products (CSV)
        </button>
        <button
          type="button"
          class="btn btn-default btn-medium"
          style="min-width: 12rem"
          @click="downloadSelected('xlsx')"
        >
          Export Selected products (XLSX)
        </button>
      </div>

      <div style="min-width: 200px">
        <PerPageDropdown />
      </div>
    </div>
  </div>

  <div v-if="products.length > 0">
    <div class="filtered-list__items long-list">
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
              </div>
            </div>
            <div class="list-element__data-row">
              {{ getFirstSentence(item.seoDescription) }}
            </div>
          </div>
          <div class="list-element__actions">
            <div class="list-element__price">{{ item.defaultDisplayedPriceFormatted }}</div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :total-items="totalProductsWithoutPagination"
      :current-page="props.currentPage"
      @update:currentPage="updatePage"
    />
  </div>

  <div v-else-if="products.length < 1" class="filtered-list__items long-list">
    <div class="list-element list-element--compact list-element--has-hover">
      <p>No Products found. Check if products exist, first of all.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getFirstSentence } from '../helpers'
import Pagination from './UI/Pagination.vue'
import PerPageDropdown from './UI/PerPageDropdown.vue'

const props = defineProps<{
  totalProductsWithoutPagination: number
  currentPage: number
  products: {
    id: number
    name: string
    description: string
    defaultDisplayedPriceFormatted: string
    smallThumbnailUrl: string
    seoDescription: string
  }[]
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

function updatePage(page: number) {
  emit('update:currentPage', page)
}

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
