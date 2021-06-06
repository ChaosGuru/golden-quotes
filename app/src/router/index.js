import Vue from 'vue'
import VueRouter from 'vue-router'
import Quotes from '../views/Quotes.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
