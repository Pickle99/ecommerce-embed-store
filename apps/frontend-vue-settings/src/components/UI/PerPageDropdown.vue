<script setup lang="ts">
import { usePerPage } from '../../composables/usePerPage'
import ArrowDownIcon from '../../../../shared/icons/ArrowDownIcon.vue'

const { perPage } = usePerPage()
</script>

<template>
  <div class="form-area">
    <div
      class="form-area__content"
      style="display: flex; align-items: center; gap: 1rem; justify-content: center; margin: 0"
    >
      <p>Products visibility (only for you, per page):</p>
      <div class="fieldsets-batch fieldsets-batch--with-single-field">
        <div style="width: 4rem" class="fieldset fieldset--select fieldset--no-label">
          <div>
            <div class="field field--medium field--filled">
              <select class="field__select" v-model.number="perPage">
                <option v-for="n in [1, 2, 5, 10, 20, 50]" :key="n" :value="n">{{ n }}</option>
              </select>
              <span class="field__arrow">
                <ArrowDownIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
