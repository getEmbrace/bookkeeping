import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Money = () => import('../views/money/index.vue')
let Tag = () => import('../views/tag/index.vue')
let Statistics = () => import('../views/statistics/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Money',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Money
  },
  {
    path: '/tag',
    name: 'Tag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Tag
  },
  {
    path: '/statistics',
    name: 'Statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Statistics
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
