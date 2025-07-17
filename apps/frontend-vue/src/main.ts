import { createApp, nextTick } from 'vue'
import RecentProducts from './components/RecentProducts.vue'
import Landing from './components/Landing.vue'

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
  Ecwid.OnCartChanged.add((cart) => {
    console.log('🛒 Cart changed:', cart.items)

    // Get all product IDs from cart items
    const cartProductIds = cart.items.map((item: any) => item.product?.id).filter(Boolean)

    console.log(cartProductIds, 'ids')

    // @ts-ignore
    const order = window.ec?.order
    if (!order?.extraFields || typeof order.extraFields !== 'object') {
      return
    }

    // Clean up RUP-specific extraFields if their products are no longer in the cart
    Object.keys(order.extraFields).forEach((key) => {
      const rupMatch = key.match(/^added_from_rup_product_id_(\d+)$/)
      if (!rupMatch) {
        return
      }

      const rupProductId = parseInt(rupMatch[1], 10)
      if (!cartProductIds.includes(rupProductId)) {
        console.log(`❌ Product ID ${rupProductId} not in cart, removing extraField: ${key}`)
        delete order.extraFields[key]
      } else {
        console.log(`✅ Product ID ${rupProductId} still in cart, keeping extraField: ${key}`)
      }
    })
    //@ts-ignore
    Ecwid.refreshConfig()
  })

  // @ts-ignore
  Ecwid.OnOrderPlaced.add((order) => {
    const itemsProductIds = order.items.map((item: OrderItemType) => item.product.id)

    // @ts-ignore
    const extraFields = ec?.order?.extraFields || {}
    const matchingProductIds: number[] = []

    for (const key in extraFields) {
      const match = key.match(/added_from_rup_product_id_(\d+)/)
      if (match) {
        const productId = parseInt(match[1])
        if (itemsProductIds.includes(productId)) {
          matchingProductIds.push(productId)
        }
      }
    }

    fetch(`http://localhost:8000/api/ordered-from-rup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: order.orderNumber,
        productId: matchingProductIds,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to notify backend')
        return res.json()
      })
      .then((data) => {
        console.log('Success', data)
      })
      .catch((err) => {
        console.error('Error notifying backend:', err)
      })
  })

  // @ts-ignore
  Ecwid.OnAPILoaded.add(function () {
    // @ts-ignore
    Ecwid.OnPageLoaded.add((page: any) => {
      //@ts-ignore
      const existingWidgets = document.querySelectorAll('.landing-widget')
      existingWidgets.forEach((el) => el.remove())

      if (page.type === 'CATEGORY') {
        const storefrontEl = document.querySelector(
          '.ecwid-productBrowser-CategoryPage'
        ) as HTMLElement
        if (!storefrontEl) return

        const landingContainer = document.createElement('div')
        landingContainer.className = 'landing-widget'
        storefrontEl.parentElement?.insertBefore(landingContainer, storefrontEl)

        const shadow = landingContainer.attachShadow({ mode: 'open' })

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

        const vueApp = createApp(Landing)
        vueApp.mount(vueRoot)
      }

      if (page.type === 'CART') {
        const cartWrapper = document.querySelector('.ec-store__content-wrapper') as HTMLElement
        if (!cartWrapper) return

        const existingWidgets = cartWrapper.querySelectorAll('.widget')
        existingWidgets.forEach((w) => w.remove())

        const existingSettingsLinks = document.querySelectorAll('a[href="#/settings"]')
        existingSettingsLinks.forEach((link) => link.parentElement?.remove())

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
          newA.href = 'http://localhost:3333'

          const newSpan = document.createElement('span')
          newSpan.className = 'svg-icon'
          newSpan.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <circle class="st0" cx="16" cy="9" r="2"/>
  <circle class="st0" cx="9" cy="9" r="2"/>
  <circle class="st0" cx="2" cy="9" r="2"/>
</svg>`

          newA.appendChild(newSpan)
          newA.appendChild(document.createTextNode('Settings'))

          newLi.appendChild(newA)
          footerRow.appendChild(newLi)
        }
      }
    })
  })
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

async function bootstrap() {
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
}

bootstrap()
