<script setup lang="ts">
import { onMounted } from 'vue'

declare global {
  interface Window {
    xProductBrowser?: (...args: string[]) => void
    Ecwid: any
  }
}

onMounted(() => {
  window.Ecwid?.OnPageLoaded?.add(function (page: any) {
    if (page.type === 'CART') {
      console.log('Cart page detected!')

      const wrapper = document.getElementById('my-store-109761389')
      if (!wrapper) {
        console.log('Store root not found')
        return
      }

      const footer = wrapper.querySelector('.ec-footer')
      if (!footer || !footer.parentElement) {
        console.log('Footer not found or has no parent')
        return
      }

      if (document.getElementById('custom-message')) {
        console.log('Message already inserted')
        return
      }

      const messageDiv = document.createElement('div')
      messageDiv.id = 'custom-message'
      messageDiv.style.backgroundColor = 'gray'
      messageDiv.style.padding = '0.5rem'

      const messageP = document.createElement('p')
      messageP.textContent = 'Hey! it is me'
      messageP.style.color = 'black'
      messageP.style.margin = '12px'

      messageDiv.appendChild(messageP)

      footer.parentElement.insertBefore(messageDiv, footer)
    }
  })
})
</script>
