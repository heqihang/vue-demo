import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Table from '../pages/Table.vue'

const routes = [
  { path: '/vue-demo', component: Home },
  { path: '/vue-demo/table', component: Table },
  { path: '/:pathMatch(.*)*', redirect: '/vue-demo' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
