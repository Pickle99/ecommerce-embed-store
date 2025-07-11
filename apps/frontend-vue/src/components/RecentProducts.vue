<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import ProductItem from './ProductItem.vue'

// Load localStorage if any
const localLimit = localStorage.getItem('selectedLimit')

const selectedLimitReady = ref(false)

const selectedLimit = ref(5)

const limitOptions = Array.from({ length: 10 }, (_, i) => i + 1)

// Computed fetch URL
const url = computed(
  () => `http://localhost:8000/recently-updated-products?limit=${selectedLimit.value}`
)

const { data, error, isFetching, execute } = useFetch(url, { immediate: true }).get().json()

const products = computed(() => data.value?.products ?? [])

// handle defaultLimit from API on first fetch
watch(data, () => {
  if (!selectedLimitReady.value && data.value?.defaultLimit != null) {
    const fromAPI = data.value.defaultLimit

    // If localStorage is empty, use defaultLimit
    if (!localLimit) {
      selectedLimit.value = fromAPI
      localStorage.setItem('selectedLimit', String(fromAPI))
    } else {
      // if localStorage has value, override the one provided by api
      selectedLimit.value = Number(localLimit)
    }

    selectedLimitReady.value = true
  }
})

// watch user changes after initial load
watch(selectedLimit, (newVal) => {
  if (selectedLimitReady.value) {
    localStorage.setItem('selectedLimit', String(newVal))
    execute()
  }
})
</script>

<template>
  <div class="catalog">
    <div class="advised_products">
      <h2 style="text-align: center">Recently Updated Products</h2>
      <div
        class="form-area"
        style="display: flex; justify-content: flex-end; margin: 1rem 0"
        v-if="products.length > 0"
      >
        <div class="form-area__content">
          <div class="fieldsets-batch fieldsets-batch--with-single-field">
            <div style="width: 4rem" class="fieldset fieldset--select fieldset--no-label">
              <div>
                <div class="field field--medium field--filled">
                  <select v-model="selectedLimit" class="field__select">
                    <option v-for="n in limitOptions" :key="n" :value="n">{{ n }}</option>
                  </select>
                  <span class="field__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" focusable="false">
                      <path
                        d="M7.85 10l5.02 4.9 5.27-4.9c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-6.45 6.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.66-.65 1.72-.65 2.37.01z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isFetching">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <div v-else-if="products.length === 0">No products found.</div>
      <div
        class="list_products"
        :style="{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }"
      >
        <ProductItem v-for="item in products" :key="item.id" :product="item" />
      </div>
    </div>
  </div>
</template>
