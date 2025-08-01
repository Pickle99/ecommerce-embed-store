<template>
  <div v-if="products.length > 0" class="catalog">
    <div class="advised_products">
      <h2 style="text-align: center">Recently Updated Products</h2>
      <div class="form-area" style="display: flex; justify-content: flex-end; margin: 1rem 0">
        <div class="form-area__content" style="display: flex; align-items: center; gap: 1rem">
          <p>Visibility of Recently Updated Products for you:</p>
          <div class="fieldsets-batch fieldsets-batch--with-single-field">
            <div style="width: 4rem" class="fieldset fieldset--select fieldset--no-label">
              <div>
                <div class="field field--medium field--filled">
                  <select v-model="selectedLimit" class="field__select">
                    <option v-for="n in limitOptions" :key="n" :value="n">{{ n }}</option>
                  </select>
                  <span class="field__arrow">
                    <ArrowDownIcon />
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
        v-else
        :style="{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
          width: '100%',
          boxSizing: 'border-box',
        }"
      >
        <ProductItem :products="products" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowDownIcon from '../../../shared/icons/ArrowDownIcon.vue'
import { useFetch } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import ProductItem from './ProductItem.vue'

// Load localStorage if any
const localLimit = localStorage.getItem('selectedLimit')

const selectedLimitReady = ref(false)

const selectedLimit = ref(localLimit ?? 5)

const limitOptions = Array.from({ length: 10 }, (_, i) => i + 1)

// Computed fetch URL
const url = computed(
  () => `http://localhost:8000/api/recently-updated-products?limit=${selectedLimit.value}`
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
