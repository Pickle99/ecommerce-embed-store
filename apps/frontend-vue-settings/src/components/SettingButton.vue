<template>
  <div class="a-card a-card--vertical-compact">
    <div class="a-card__paddings">
      <div class="iconable-block iconable-block--hide-in-mobile">
        <div class="iconable-block__infographics">
          <span class="iconable-block__icon">
            <LockIcon v-if="actionButton === 'toggle'" />
            <DropdownListIcon v-if="actionButton === 'dropdown'" />
          </span>
        </div>
        <div class="iconable-block__content">
          <div class="status-block">
            <div class="status-block__central">
              <div class="status-block__header">
                <span class="status-block__title">{{ title }}</span>
                <span class="status-block__edit">Edit</span>
              </div>
              <div class="status-block__content">
                <p>{{ description }}</p>
              </div>
            </div>
            <div
              v-if="actionButton === 'dropdown'"
              :class="{
                fieldset: true,
                'fieldset--with-action': true,
                'fieldset--with-label': true,
                'has-success': successFromResponse,
                'has-error': errorFromResponse,
              }"
            >
              <div class="fieldset__field-wrapper">
                <div class="field field--medium">
                  <span class="fieldset__svg-icon"></span>
                  <label class="field__label">Write number < 10</label>
                  <input type="number" class="field__input" tabindex="4" v-model="numberValue" />
                  <div class="field__placeholder">Write number < 10</div>
                  <span class="field-state--success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26px"
                      height="26px"
                      viewBox="0 0 26 26"
                      focusable="false"
                    >
                      <path
                        d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                      ></path>
                    </svg>
                  </span>
                  <span class="field-state--close">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 16 16"
                      enable-background="new 0 0 16 16"
                      xml:space="preserve"
                      focusable="false"
                    >
                      <path
                        d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="fieldset__field-action" @click="updateRupCount">
                  <a>Save</a>
                </div>
              </div>
              <div class="field__error" aria-hidden="true" style="display: none"></div>
            </div>

            <div v-else-if="actionButton === 'toggle'" class="status-block__primary-action">
              <label class="checkbox big">
                <input
                  name="toggler"
                  type="checkbox"
                  :checked="settingsData.recently_updated_products_visibility"
                  @change="onToggleChange"
                />
                <div>
                  <div></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import type { RupSettings } from '../types'
import LockIcon from '../icons/LockIcon.vue'
import DropdownListIcon from '../icons/DropdownListIcon.vue'
import { useAutoReset } from '../composables/useAutoReset'

const emit = defineEmits(['toggle'])

defineProps<{
  title: string
  description: string
  actionButton: 'toggle' | 'dropdown'
  settingsData: RupSettings
}>()

const successFromResponse = ref(false)
const errorFromResponse = ref(false)

const numberValue = ref(0)

const recentlyUpdatedProducts = computed(() => `http://localhost:8000/recently-updated-products`)

const { data, error, isFetching, execute } = useFetch(recentlyUpdatedProducts, { immediate: true })
  .get()
  .json()

watch(data, () => {
  if (data.value?.defaultLimit) {
    numberValue.value = data.value.defaultLimit
  }
})

useAutoReset(successFromResponse, 1000)
useAutoReset(errorFromResponse, 3000)

watch(numberValue, (val) => {
  if (val < 0) numberValue.value = 1
  if (val > 10) numberValue.value = 10
})

async function updateRupCount() {
  try {
    const response = await fetch('http://localhost:8000/rup-count', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recently_updated_products_visibility_count: numberValue.value,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      successFromResponse.value = false
      errorFromResponse.value = true
      throw new Error(`Failed to update RUP count: ${errorText}`)
    }

    const result = await response.json()
    errorFromResponse.value = false
    successFromResponse.value = true
    console.log('Updated settings:', result)
  } catch (err) {
    console.error('Error updating RUP count:', err)
    successFromResponse.value = false
    errorFromResponse.value = true
  }
}

function onToggleChange(event: Event) {
  const input = event.target as HTMLInputElement
  emit('toggle', input.checked)
}
</script>
