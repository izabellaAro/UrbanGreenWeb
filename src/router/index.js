import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/views/AppHome.vue';
import Orders from '@/views/OrdersPage.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: AppHome,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { layout: 'DefaultLayout' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
