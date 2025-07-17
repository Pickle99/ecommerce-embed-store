import { ref, watch } from 'vue'

const STORAGE_KEY = 'productsPerPage'
const defaultPerPage = 5

const perPage = ref<number>(getInitialPerPage())

function getInitialPerPage(): number {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? parseInt(stored, 5) || defaultPerPage : defaultPerPage
}

watch(perPage, (newVal) => {
  localStorage.setItem(STORAGE_KEY, newVal.toString())
})

export function usePerPage() {
  return {
    perPage,
  }
}
