import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminView from '@views/Admin';
import CardsView from '@views/Cards';
import UsersView from '@views/Users';

const routes = [
   {
      name: 'Admin',
      path: '/admin',
      component: AdminView
   },
   {
      name: 'Cards',
      path: '/cards',
      component: CardsView
   },
   {
      name: 'Users',
      path: '/users',
      component: UsersView
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
