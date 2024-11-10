import { createRouter, createWebHistory } from 'vue-router';
import Orders from '@/views/OrdersPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import AuthService from '@/services/UserService';
import EmployesPage from '@/views/EmployesPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { layout: 'LoginLayout' },
  },
  {
    path: '/',
    redirect: '/orders',
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/employees',
    name: 'Employes',
    component: EmployesPage,
    meta: { layout: 'DefaultLayout' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
