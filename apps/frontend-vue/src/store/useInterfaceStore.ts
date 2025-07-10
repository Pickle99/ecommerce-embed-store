import { defineStore } from 'pinia'

export const useInterfaceStore = defineStore('interface', {
  state: () => ({
    openSettings: false,
  }),
  actions: {
    toggleSettings(param: boolean) {
      this.openSettings = param
    },
  },
})
