<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed, onMounted } from 'vue'
import RecentProduct from './components/RecentProduct.vue'

const { data, error, isFetching } = useFetch(
  'http://localhost:8000/recently-updated-products'
).json()

const products = computed(() => data.value?.products ?? [])

console.log(products, 'products')
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
          'flex-wrap': 'wrap',
          gap: '1.5rem',
        }"
      >
        <RecentProduct v-for="item in products" :key="item.id" :product="item" />
      </div>
    </div>
  </div>
  <div>i dont see anything</div>
</template>
