<template>
  <div class="pagination">
    <div class="pagination__status showing-status">
      Showing <span class="showing-status__pages">{{ fromItem }} – {{ toItem }}</span> of
      <span class="showing-status__total">{{ totalItems }}</span> items.
    </div>
    <div>
      <button
        class="btn btn-default btn-medium pagination__nav pagination__nav--prev"
        @click="goPrev"
        :disabled="currentPage === 1"
      >
        <span class="svg-icon"> <ArrowLeftIcon /> </span>
      </button>
      <span class="pagination__label">
        Page:
        <span class="pagination__current">
          <input
            type="number"
            class="form-control input-medium"
            maxlength="7"
            :value="currentPage"
            @input="onInput"
          />
          <span class="form-control input-medium input-size"> {{ currentPage }} </span>
        </span>
        of <span class="pagination__total">{{ totalPages }}</span>
      </span>
      <button
        class="btn btn-default btn-medium pagination__nav pagination__nav--next"
        @click="goNext"
        :disabled="currentPage === totalPages"
      >
        <span class="svg-icon">
          <ArrowRightIcon />
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePerPage } from '../../composables/usePerPage'
import ArrowRightIcon from '../../icons/ArrowRightIcon.vue'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon.vue'

const { perPage } = usePerPage()

const props = defineProps<{
  totalItems: number
  currentPage: number
}>()

console.log(props)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const page = parseInt(target.value, 10)
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

const totalPages = computed(() => Math.ceil(props.totalItems / perPage.value))

const fromItem = computed(() => (props.currentPage - 1) * perPage.value + 1)
const toItem = computed(() => Math.min(props.currentPage * perPage.value, props.totalItems))

function goPrev() {
  if (props.currentPage > 1) emit('update:currentPage', props.currentPage - 1)
}

function goNext() {
  if (props.currentPage < totalPages.value) emit('update:currentPage', props.currentPage + 1)
}
</script>
