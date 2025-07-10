<script setup lang="ts">
import SettingsPage from './components/SettingsPage.vue'
import EcwidWrapper from './EcwidWrapper.vue'
import { useInterfaceStore } from './store/useInterfaceStore'

const interfaceStore = useInterfaceStore()
</script>

<template>
  <EcwidWrapper v-if="interfaceStore.$state.openSettings === false" />
  <SettingsPage v-else-if="interfaceStore.$state.openSettings === true" />
</template>
