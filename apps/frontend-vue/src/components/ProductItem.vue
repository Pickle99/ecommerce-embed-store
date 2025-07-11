<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number
    name: string
    defaultDisplayedPriceFormatted: string
    imageUrl: string
  }
}>()

function addToCart(e: Event) {
  //@ts-ignore
  Ecwid.Cart.addProduct(props.product.id)
  const key = 'from_rup_to_cart'

  // Get existing list or default to empty array
  const existing = JSON.parse(localStorage.getItem(key) || '[]')

  // Add current product ID as string (if not already included)
  if (!existing.includes(props.product.id)) {
    existing.push(props.product.id)
  }

  // Save back to localStorage
  localStorage.setItem(key, JSON.stringify(existing))
}

function openProductPage() {
  // @ts-ignore
  Ecwid.openPage('product', { id: props.product.id })
}
</script>

<template>
  <div
    class="preview-container preview-container--active-hover-dark"
    :style="{
      'background-image': 'url(' + product.imageUrl + ')',
      width: '18%',
      'min-width': '180px',
    }"
    @click="openProductPage"
  >
    <div class="live-picture live-picture--startersite" style="height: 10rem">
      <div class="live-picture__header">{{ product.defaultDisplayedPriceFormatted }}</div>
      <div class="live-picture__body" :style="{ 'font-size': '1rem', 'line-height': '1rem' }">
        <p>{{ product.name }}</p>
      </div>
      <div class="live-picture__footer">
        <button @click.stop="addToCart" class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>
