import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/vue-demo/', component: Home },
  { path: '/vue-demo/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
