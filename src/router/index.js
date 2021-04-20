import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminView from '../views/Admin';

const routes = [
   {
      path: '/admin',
      component: AdminView
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
