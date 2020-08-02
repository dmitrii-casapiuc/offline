import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import('@/views/Songs/index.vue')
  },
  {
    path: '/song/:id',
    name: 'Song',
    component: () => import('@/views/Song/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
