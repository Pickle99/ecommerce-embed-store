import { createRouter, createWebHashHistory } from 'vue-router'
import SettingsPage from './components/SettingsPage.vue'
import EcwidWrapper from './EcwidWrapper.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/settings',
      component: SettingsPage,
    },
    {
      path: '/:pathMatch(.*)*',
      component: EcwidWrapper,
    },
  ],
})
