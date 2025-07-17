<template>
  <div class="settings-page cf" style="padding: 1.5rem; padding-bottom: 4rem">
    <div
      @click="handleRedirectToStore"
      style="display: flex; align-items: center; gap: 0.7rem; cursor: pointer; width: fit-content"
    >
      <div>
        <LongArrowLeftIcon />
      </div>
      <h1 style="color: blue">Redirect back to store</h1>
    </div>
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
    </div>
    <div class="settings-page__body" style="padding-bottom: 0.1px">
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Widget-related Settings</div>
            <div class="named-area__subtitle">
              You can enable/disable the widget from this section. Or set the default value of
              visibility for users.
            </div>
          </div>
        </div>
        <div class="named-area__body">
          <SettingButton
            title="RUP widget"
            description="Enable/Disable recently updated products widget visibility"
            actionButton="toggle"
            :settingsData="settings"
            @toggle="updateWidgetVisibility"
          />
          <SettingButton
            title="Products visibility on RUP widget by default"
            description="Set how many Products are visible on RUP widget by default"
            actionButton="dropdown"
            :settingsData="settings"
            :defaultLimit="settings.recently_updated_products_visibility_count"
          />
        </div>
      </div>
      <div class="named-area" style="padding-bottom: 15rem">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Products catalog list</div>
            <div class="named-area__subtitle">You can see and export your products from here.</div>
          </div>
        </div>
        <div class="named-area__body" v-if="products.length">
          <ProductTableList :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import SettingButton from './SettingButton.vue'
import ProductTableList from './ProductTableList.vue'
import LongArrowLeftIcon from '../icons/LongArrowLeftIcon.vue'

function handleRedirectToStore() {
  window.location.replace('http://localhost:8000')
}

const { data: rupSettingsData } = useFetch('http://localhost:8000/api/rup-settings').json()

const { data: productsData } = useFetch('http://localhost:8000/api/products').json()

const products = computed(() => productsData.value?.products ?? [])

const settings = computed(() => rupSettingsData.value?.settings ?? [])

async function updateWidgetVisibility(newValue: boolean) {
  try {
    const response = await fetch('http://localhost:8000/api/rup-toggle', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        recently_updated_products_visibility: newValue,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to update setting')
    }

    const result = await response.json()
    console.log('Setting updated:', result)

    settings.value.recently_updated_products_visibility = newValue
  } catch (error) {
    console.error('Error updating widget visibility:', error)
  }
}
</script>
