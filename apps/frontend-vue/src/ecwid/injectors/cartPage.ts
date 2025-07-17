import { createApp } from 'vue'
import RecentProducts from '../../components/RecentProducts.vue'

export function injectCartPage() {
  const cartWrapper = document.querySelector('.ec-store__content-wrapper') as HTMLElement
  if (!cartWrapper) return

  cartWrapper.querySelectorAll('.widget').forEach((el) => el.remove())
  cartWrapper.querySelectorAll('a[href="#/settings"]').forEach((el) => el.parentElement?.remove())

  cartWrapper.style.display = 'flex'
  cartWrapper.style.flexDirection = 'column'

  const widget = document.createElement('div')
  widget.className = 'widget'
  widget.style.order = '2'

  const shadow = widget.attachShadow({ mode: 'open' })
  const root = document.createElement('div')
  root.className = 'widget_container'
  const css = document.createElement('link')
  css.href = 'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/css/1.3.18/ecwid-app-ui.css'
  css.rel = 'stylesheet'

  shadow.append(css, root)
  cartWrapper.appendChild(widget)

  createApp(RecentProducts).mount(root)

  const footer = document.querySelector('.ec-footer') as HTMLElement
  if (footer) footer.style.order = '3'

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
