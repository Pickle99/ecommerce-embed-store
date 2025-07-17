import { nextTick } from 'vue'
import { initCartEnhancements, initEcwid } from './ecwid'

async function bootstrap() {
  await nextTick()
  const scriptUrl =
    'https://app.ecwid.com/script.js?101560752&data_platform=code&data_date=2025-07-08'
  if (!document.querySelector(`script[src*="ecwid.com/script.js"]`)) {
    const script = document.createElement('script')
    script.src = scriptUrl
    script.setAttribute('data-cfasync', 'false')
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
