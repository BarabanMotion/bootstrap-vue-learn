import Vue from 'vue';
import Vuex from 'vuex';

import generic from './modules/generic';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      generic
   }
})
