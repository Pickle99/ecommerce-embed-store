import { createApp } from 'vue'
import App from './App.vue'

const script = document.createElement('script')
script.src = 'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/css/1.3.18/ecwid-app-ui.min.js'
script.async = true
document.head.appendChild(script)

const app = createApp(App)
app.mount('#app')
