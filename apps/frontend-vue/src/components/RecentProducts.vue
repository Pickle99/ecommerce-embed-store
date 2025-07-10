<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import ProductItem from './ProductItem.vue'

const { data, error, isFetching } = useFetch(
  'http://localhost:8000/recently-updated-products'
).json()

const products = computed(() => data.value?.products ?? [])
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else-if="products.length === 0">No products found.</div>
  <div v-else class="catalog">
    <div class="advised_products">
      <h2 style="text-align: center">Recently Updated Products</h2>
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
