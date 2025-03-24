import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./pages/dashboard/Dashboard.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('./pages/setting/Setting.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/eye-break/'),
  routes,
})

export default router
