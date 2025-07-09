import { createApp } from 'vue'
import App from './App.vue'

//@ts-ignore
Ecwid.OnPageLoaded.add((page: any) => {
  if (page.type === 'CART') {
    const cartWrapper = document.querySelector('.ec-store__content-wrapper') as HTMLElement
    if (!cartWrapper) return

    const widgetContainer = document.createElement('div')
    widgetContainer.setAttribute('class', 'widget')
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

    const app = createApp(App)
    app.mount(vueRoot)
  }
})
