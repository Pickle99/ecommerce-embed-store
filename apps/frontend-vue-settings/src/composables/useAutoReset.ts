import { watch, Ref } from 'vue'

export function useAutoReset(refValue: Ref<boolean>, delay = 1000) {
  watch(refValue, (val) => {
    if (val) {
      setTimeout(() => {
        refValue.value = false
      }, delay)
    }
  })
}
