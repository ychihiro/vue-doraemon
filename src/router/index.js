import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Thanks from '../views/Thanks.vue'
import Diagnosis from '../views/Diagnosis.vue'
import Result from '../views/Result.vue'
import MyPage from '../views/MyPage.vue'
import Addmin from '../views/Addmin.vue'
import Purchase from '../views/Purchase.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Top,
    meta: { requiresAuth: true }
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Thanks
  },
  {
    path: '/diagnosis',
    name: 'diagnosis',
    component: Diagnosis
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage
  },
  {
    path: '/addmin',
    name: 'addmin',
    component: Addmin
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: Purchase
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
