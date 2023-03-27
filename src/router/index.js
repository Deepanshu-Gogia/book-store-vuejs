import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: ProductDetailView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
