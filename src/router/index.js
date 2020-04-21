import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue'),
  },
  {
    path: '/certification',
    name: 'Certification',
    component: () => import(/* webpackChunkName: "certification" */ '../views/Certification.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
