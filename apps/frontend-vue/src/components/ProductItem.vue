<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4.5rem',
      padding: '1rem',
      width: '100%',
      boxSizing: 'border-box',
    }"
  >
    <div
      v-for="product in products"
      :key="product.id"
      @mouseenter="hoveredId = product.id"
      @mouseleave="hoveredId = null"
      @click="openProductPage(product.id)"
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
      }"
    >
      <div
        :style="{
          width: products.length === 1 ? '35%' : '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }"
      >
        <img
          :src="product.imageUrl"
          alt="product image"
          loading="lazy"
          width="300"
          height="300"
          :style="{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: hoveredId === product.id ? 'scale(1.1)' : 'scale(1)',
            display: 'block',
          }"
        />
      </div>

      <div
        :style="{
          textAlign: 'center',
          marginTop: '0.75rem',
          fontSize: '0.95rem',
          fontWeight: '500',
          height: '2.3rem',
          cursor: 'pointer',
          color: hoveredId === product.id ? '#007BFF' : 'black',
          transition: 'color 0.2s ease',
        }"
      >
        {{ product.name }}
      </div>

      <div
        :style="{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '800',
        }"
      >
        {{ product.defaultDisplayedPriceFormatted }}
      </div>

      <button
        @click.stop="addToCart(product.id)"
        :style="{
          marginTop: '0.75rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '0.9rem',
          cursor: 'pointer',
        }"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  products: {
    id: number
    name: string
    defaultDisplayedPriceFormatted: string
    imageUrl: string
  }[]
}>()

const hoveredId = ref<number | null>(null)

function addToCart(productId: number) {
  const fieldTitle = `added_from_rup_product_id_${productId}`
  const title = `product_id=${productId} was added to cart from RUP widget`

  // @ts-ignore
  window.ec = window.ec || {}
  // @ts-ignore
  ec.order = ec.order || {}
  // @ts-ignore
  ec.order.extraFields = ec.order.extraFields || {}
  // @ts-ignore
  ec.order.extraFields[fieldTitle] = {
    title: title,
    type: 'empty',
    productId,
    orderDetailsDisplaySection: 'order_comments',
  }

  // @ts-ignore
  Ecwid.Cart.addProduct(productId)
}

function openProductPage(productId: number) {
  // @ts-ignore
  Ecwid.openPage('product', { id: productId })
}
</script>
