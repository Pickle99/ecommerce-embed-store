import { createApp } from 'vue'
import Landing from '../../components/Landing.vue'

//it is actually category page, but lets say its landing

export function injectLandingPage() {
  const container = document.querySelector('.ecwid-productBrowser-CategoryPage')?.parentElement
  if (!container) return
  const wrapper = document.createElement('div')
  wrapper.className = 'landing-widget'
  const shadow = wrapper.attachShadow({ mode: 'open' })

  const root = document.createElement('div')
  root.className = 'widget_container'
  const css = document.createElement('link')
  css.href = 'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/css/1.3.18/ecwid-app-ui.css'
  css.rel = 'stylesheet'

  shadow.append(css, root)
  container.insertBefore(wrapper, container.querySelector('.ecwid-productBrowser-CategoryPage')!)

  createApp(Landing).mount(root)
}
