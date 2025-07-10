<template>
  <div class="a-card a-card--vertical-compact">
    <div class="a-card__paddings">
      <div class="iconable-block iconable-block--hide-in-mobile">
        <div class="iconable-block__infographics">
          <span class="iconable-block__icon">
            <EyeIcon v-if="actionButton === 'toggle'" />
            <!-- fallback (optional) -->
            <NumberedListIcon v-if="actionButton === 'dropdown'" />
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
            <div class="status-block__actions-dropdown">
              <div class="btn-group dropdown-toggle">
                <button
                  type="button"
                  class="btn btn-default btn-medium"
                  aria-hidden="true"
                  style="display: none"
                ></button>

                <div v-if="actionButton === 'dropdown'">
                  <div
                    class="btn btn-default btn-dropdown btn-medium list-dropdown-no-general-text"
                  >
                    <span class="btn-dropdown-container"><span class="actions">Select</span></span
                    ><span class="icon-arr-down"></span>
                  </div>
                  <div class="list-dropdown list-dropdown-medium">
                    <ul>
                      <li><a>Rename</a></li>
                      <li><a>Sort</a></li>
                      <li><a>Delete</a></li>
                    </ul>
                  </div>
                </div>
                <div v-else-if="actionButton === 'toggle'" class="status-block__primary-action">
                  <label class="checkbox big">
                    <input
                      name=""
                      type="checkbox"
                      :checked="settingsData.recently_updated_products_visibility"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { RupSettings } from '../types'
import EyeIcon from './icons/EyeIcon.vue'
import NumberedListIcon from './icons/NumberedListIcon.vue'

defineProps<{
  title: string
  description: string
  actionButton: 'toggle' | 'dropdown'
  settingsData: RupSettings
}>()
</script>
