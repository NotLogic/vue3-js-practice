import {
  createRouter,
  createWebHistory
} from 'vue-router'
// vue-router所有方法单独导出，没有全部导出
import * as VueRouter from 'vue-router'
console.log('VueRouter:', Object.keys(VueRouter))

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
  },
  {
    path: '/element',
    component: () => import(/* webpackChunkName: "element" */ '@/views/element.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
