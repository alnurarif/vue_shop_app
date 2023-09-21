import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'products',
      component: () => import('../pages/Products.vue')
    },
    {
      path: '/product/:product_id',
      name: 'product_details',
      component: () => import('../pages/Product.vue')
    }
  ]
})

export default router
