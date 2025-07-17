<template>
  <div>
    <div :style="containerStyle">
      <div :style="imageBlockStyle"></div>
      <div :style="contentStyle">
        <div :style="textBoxStyle">
          <h1 :style="headingStyle">E-commerce Ecwid Store</h1>
          <p :style="paragraphStyle">
            E-commerce store. On our page you can buy a lot of stuff. T-Shirts, shoes, and not only.
            Please notice that right now it is just a samples, for test.
          </p>
          <a href="#" :style="buttonStyle" @click.prevent="scrollToProducts">Shop Now</a>
        </div>
      </div>
    </div>
    <div ref="productsAnchor" style="height: 2rem"></div>
    <h1 style="text-align: center">Products</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { CSSProperties } from 'vue'

const isMobile = ref(false)

const updateLayout = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

const productsAnchor = ref<HTMLElement | null>(null)

const scrollToProducts = () => {
  if (productsAnchor.value) {
    productsAnchor.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// CSS Styles section below

const fixedBlockHeight = '50vh'

const containerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: isMobile.value ? 'column' : 'row-reverse',
  width: '100%',
  height: isMobile.value ? 'auto' : '100vh',
  fontFamily: 'sans-serif',
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
}))

const imageBlockStyle = computed<CSSProperties>(() => ({
  width: isMobile.value ? '100%' : '50%',
  minHeight: isMobile.value ? fixedBlockHeight : '100vh',
  backgroundImage:
    'url("https://dhgf5mcbrms62.cloudfront.net/76839262/cover-HaXq6F/c4M1J1Q-2000x2000.webp")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexGrow: 1,
}))

const contentStyle = computed<CSSProperties>(() => ({
  width: isMobile.value ? '100%' : '50%',
  minHeight: isMobile.value ? fixedBlockHeight : '100vh',
  backgroundColor: '#fde68a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  boxSizing: 'border-box',
  flexGrow: 1,
}))

const textBoxStyle = computed<CSSProperties>(() => ({
  maxWidth: '500px',
  textAlign: isMobile.value ? 'center' : 'left',
}))

const headingStyle: CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  lineHeight: '3rem',
  marginBottom: '1rem',
}

const paragraphStyle: CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  color: '#333',
}

const buttonStyle: CSSProperties = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.6rem 1.5rem',
  borderRadius: '9999px',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
}
</script>
