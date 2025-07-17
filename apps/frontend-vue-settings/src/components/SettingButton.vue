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
                    <GreenCheckmarkIcon />
                  </span>
                  <span class="field-state--close">
                    <RedXIcon />
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
import { ref, watch } from 'vue'
import type { RupSettings } from '../types'
import LockIcon from '../icons/LockIcon.vue'
import DropdownListIcon from '../icons/DropdownListIcon.vue'
import { useAutoReset } from '../composables/useAutoReset'
import GreenCheckmarkIcon from '../icons/GreenCheckmarkIcon.vue'
import RedXIcon from '../icons/RedXIcon.vue'

const emit = defineEmits(['toggle'])

const props = defineProps<{
  title: string
  description: string
  actionButton: 'toggle' | 'dropdown'
  settingsData: RupSettings
  defaultLimit?: number
}>()

const successFromResponse = ref(false)
const errorFromResponse = ref(false)

const numberValue = ref(0)

watch(props, () => {
  if (props.defaultLimit) {
    numberValue.value = props.defaultLimit
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
    const response = await fetch('http://localhost:8000/api/rup-count', {
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
