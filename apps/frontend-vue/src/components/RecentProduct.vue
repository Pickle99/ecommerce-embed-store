<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number
    name: string
    defaultDisplayedPriceFormatted: string
    imageUrl: string
  }
}>()
</script>

<template>
  <div
    class="preview-container preview-container--active-hover-dark"
    :style="{
      'background-image': 'url(' + product.imageUrl + ')',
      width: '18%',
      'min-width': '180px',
    }"
  >
    <div class="live-picture live-picture--startersite" style="height: 10rem">
      <div class="live-picture__header">{{ product.defaultDisplayedPriceFormatted }}</div>
      <div class="live-picture__body" :style="{ 'font-size': '1rem', 'line-height': '1rem' }">
        <p>{{ product.name }}</p>
      </div>
      <div class="live-picture__footer">
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>
