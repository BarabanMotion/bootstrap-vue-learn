import Vue from 'vue';
import Vuex from 'vuex';

import generic from './modules/generic';
import cards from './modules/cards';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      generic,
      cards,
      users
   }
})
