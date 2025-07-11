<script setup lang="ts">
const props = defineProps<{
  product: {
    id: number
    name: string
    defaultDisplayedPriceFormatted: string
    imageUrl: string
  }
}>()

function addToCart() {
  const fieldTitle = `added_from_rup_product_id_${props.product.id}`
  const title = `product_id=${props.product.id} was added to cart from RUP widget`

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
    productId: props.product.id,
  }
  // @ts-ignore
  Ecwid.refreshConfig && Ecwid.refreshConfig()

  // @ts-ignore
  Ecwid.Cart.addProduct(props.product.id)
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
