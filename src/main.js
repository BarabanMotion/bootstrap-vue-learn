import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap VUE
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// END

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app');
