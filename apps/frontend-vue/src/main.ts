import { createApp } from 'vue'
import App from './App.vue'

//@ts-ignore
Ecwid.OnPageLoaded.add(function (page: any) {
  if (page.type === 'CART') {
    console.log('cart page')
    const cartWrapper = document.querySelector('.ec-store__content-wrapper') as HTMLElement
    if (cartWrapper) {
      cartWrapper.style.display = 'flex'
      cartWrapper.style.flexDirection = 'column'
      console.log('parent found')
    } else {
      console.log('parent not found')
    }

    const widgetContainer = document.createElement('div')
    widgetContainer.style.order = '2'

    const ecwidFooter = document.querySelector('.ec-footer') as HTMLElement
    if (ecwidFooter) ecwidFooter.style.order = '3'

    widgetContainer.setAttribute('class', 'widget')
    cartWrapper?.appendChild(widgetContainer)

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

    const vueApp = createApp(App)
    vueApp.mount(vueRoot)
  }
})
