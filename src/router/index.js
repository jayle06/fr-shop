import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../components/Product/Products.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Login/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/Cart/ShoppingCart.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('../components/Product/ProductDetail.vue')
  },
  {
    path: '/search',
    name: 'SearchProducts',
    component: () => import('../components/SearchProducts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
