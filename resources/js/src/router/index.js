
import { createRouter, createWebHistory } from 'vue-router'
import productsIndex from '@/pages/products/index.vue';
import productsAdd from '@/pages/products/add.vue';
import productsShow from '@/pages/products/show.vue';
import productsEdit from '@/pages/products/edit.vue';
const routes = [
  {
    path: '/',
    name: 'products.index',
    component: productsIndex
  },
  {
    path: '/products/add',
    name: 'products.add',
    component: productsAdd
  },
  {
    path: '/products/:id',
    name: 'products.show',
    component: productsShow
  },
  {
    path: '/products/edit/:id',
    name: 'products.edit',
    component: productsEdit
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
