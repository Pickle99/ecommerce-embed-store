<template>
  <div v-if="!stylesLoaded">Loading styles...</div>
  <div v-else class="settings-page cf" style="padding: 1.5rem">
    <div class="settings-page__header">
      <div class="settings-page__titles settings-page__titles--left">
        <h1 class="settings-page__title">Store onwer Settings page</h1>
        <div class="settings-page__subtitle">
          You can see how many people interacted with recently updated products, how many recently
          updated products are visible by default for customers, export the products to CSV/XSLX, or
          enable/disable the widget. P.S: this page is built for store owner, however right now it
          does not have any auth or guard.
        </div>
      </div>

      <div class="alert alert-success alert-icon">
        <div class="alert-inner">
          <div class="alert-content">
            <div class="icon">
              <span class="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                  <path
                    d="M34.5 67h-.13c-8.68-.03-16.83-3.45-22.94-9.61C5.32 51.23 1.97 43.06 2 34.38 2.07 16.52 16.65 2 34.5 2h.13c8.68.03 16.83 3.45 22.94 9.61 6.12 6.16 9.46 14.34 9.43 23.02C66.93 52.48 52.35 67 34.5 67zm0-62C18.3 5 5.06 18.18 5 34.39c-.03 7.88 3.01 15.3 8.56 20.89 5.55 5.59 12.95 8.69 20.83 8.72h.12c16.2 0 29.44-13.18 29.5-29.39.03-7.88-3.01-15.3-8.56-20.89C49.89 8.13 42.49 5.03 34.61 5h-.11z"
                  ></path>
                  <path
                    d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="title">This is an example alert you can show in your app.</div>
            <div>
              Use the alert messages to catch users’ attention. If you want to let your users know
              about a problem or successful operation in your app, use the alerts.
              <a onclick="postOpenPage('#components.alerts')">See Alerts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-page__body" style="padding-bottom: 0.1px">
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Settings list</div>
            <div class="named-area__subtitle">
              The list of custom or predefined settings showing their status. If you make this
              section customizable, you need to hide it. Always place the Call to action list next
              to the Settings list.
              <a onclick="postOpenPage('#components.status-card')">See Status component</a>
            </div>
          </div>
        </div>
        <div class="named-area__body">
          <SettingToggle
            title="RUP widget"
            description="Enable/Disable recently updated products widget visibility"
            actionButton="toggle"
          >
            <template #icon>
              <EyeIcon />
            </template>
          </SettingToggle>

          <SettingToggle
            title="Products visibility on RUP widget by default"
            description="Set how many Products are visible on RUP widget by default"
            actionButton="dropdown"
          >
            <template #icon>
              <NumberedListIcon />
            </template>
          </SettingToggle>
        </div>
      </div>

      <ProductTableList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'
import ProductTableList from './ProductTableList.vue'
import SettingToggle from './SettingToggle.vue'
import EyeIcon from './icons/EyeIcon.vue'
import NumberedListIcon from './icons/NumberedListIcon.vue'

const { data, error, isFetching } = useFetch('http://localhost:8000/rup-settings').json()

const settings = computed(() => data.value?.settings ?? [])

const stylesLoaded = ref(false)

onMounted(() => {
  const existing = document.querySelector('link[href*="ecwid-app-ui.css"]') as HTMLLinkElement

  if (existing) {
    if (existing.sheet) {
      stylesLoaded.value = true // already loaded
    } else {
      existing.addEventListener('load', () => {
        stylesLoaded.value = true
      })
    }
  } else {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://d35z3p2poghz10.cloudfront.net/ecwid-sdk/css/1.3.18/ecwid-app-ui.css'

    link.onload = () => {
      stylesLoaded.value = true
    }

    document.head.appendChild(link)
  }
})
</script>
