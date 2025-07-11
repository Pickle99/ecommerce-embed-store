<template></template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { createApp } from 'vue'
import RecentProducts from './components/RecentProducts.vue'

type OrderItemType = {
  product: {
    price: number
    name: string
    weight: number
    id: number
    shortDescription: string
    sku: string
    url: string
  }
  quantity: number
  options: {
    [optionName: string]: string
  }
}

function initCartEnhancements() {
  //@ts-ignore
  Ecwid.OnOrderPlaced.add((order) => {
    const payload = {
      orderId: order.orderNumber,
      productId: order.items.map((item: OrderItemType) => item.product.id),
    }

    fetch(`http://localhost:8000/orders/${payload.orderId}/add-rup-extra-field`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to notify backend')
        return res.json()
      })
      .then((data) => {
        console.log('Backend notified successfully:', data)
      })
      .catch((err) => {
        console.error('Error notifying backend:', err)
      })
  })

  // @ts-ignore
  Ecwid.OnPageLoaded.add(function (page: any) {
    if (page.type === 'CART') {
      const cartWrapper = document.querySelector('.ec-store__content-wrapper') as HTMLElement
      if (!cartWrapper) return

      // Clenup existing widgets
      const existingWidgets = cartWrapper.querySelectorAll('.widget')
      existingWidgets.forEach((widget) => {
        widget.remove()
      })

      // Cleanup existing settings links
      const existingSettingsLinks = document.querySelectorAll('a[href="#/settings"]')
      existingSettingsLinks.forEach((link) => {
        link.parentElement?.remove()
      })

      cartWrapper.style.display = 'flex'
      cartWrapper.style.flexDirection = 'column'

      const widgetContainer = document.createElement('div')
      widgetContainer.setAttribute('class', 'widget')
      widgetContainer.style.order = '2'
      cartWrapper.appendChild(widgetContainer)

      const shadow = widgetContainer.attachShadow({ mode: 'open' })
      const vueRoot = document.createElement('div')
      vueRoot.setAttribute('class', 'widget_container')

      const stylesheet = document.createElement('link')
      stylesheet.setAttribute(
        'href',
        'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/css/1.3.18/ecwid-app-ui.css'
      )
      stylesheet.setAttribute('rel', 'stylesheet')

      shadow.appendChild(stylesheet)
      shadow.appendChild(vueRoot)

      const vueApp = createApp(RecentProducts)
      vueApp.mount(vueRoot)

      const ecwidFooter = document.querySelector('.ec-footer') as HTMLElement
      if (ecwidFooter) ecwidFooter.style.order = '3'

      const footerRow = document.querySelector('.ec-footer__row') as HTMLElement
      if (footerRow && !footerRow.querySelector('a[href="#/settings"]')) {
        const newLi = document.createElement('li')
        newLi.className = 'ec-footer__cell __web-inspector-hide-shortcut__'

        const newA = document.createElement('a')
        newA.className =
          'ec-footer__link ec-link ec-link--muted link--icon-top footer__link--shopping-cart'
        newA.href = 'http://localhost:3333/settings'

        const newSpan = document.createElement('span')
        newSpan.className = 'svg-icon'
        newSpan.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><circle class="st0" cx="16" cy="9" r="2"/><circle class="st0" cx="9" cy="9" r="2"/><circle class="st0" cx="2" cy="9" r="2"/></svg>
`

        newA.appendChild(newSpan)
        newA.appendChild(document.createTextNode('Settings'))

        newLi.appendChild(newA)
        footerRow.appendChild(newLi)
      }
    }
  })
}

onMounted(async () => {
  await nextTick()
  const existingScript = document.querySelector('script[src*="ecwid.com/script.js"]')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = 'https://app.ecwid.com/script.js?101560752&data_platform=code&data_date=2025-07-08'
    script.setAttribute('data-cfasync', 'false')
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.onload = () => {
      initEcwid()
      initCartEnhancements()
    }
    document.body.appendChild(script)
  } else {
    initEcwid()
    initCartEnhancements()
  }

  function initEcwid() {
    // @ts-ignore
    if (typeof xProductBrowser === 'function') {
      // @ts-ignore
      xProductBrowser(
        'categoriesPerRow=3',
        'views=grid(20,3) list(60) table(60)',
        'categoryView=grid',
        'searchView=list',
        'id=my-store-101560752'
      )
    } else {
      console.warn('xProductBrowser not found')
    }
  }
})
</script>
