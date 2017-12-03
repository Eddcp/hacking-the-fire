import Vue from 'vue';
import Router from 'vue-router';
import VueTheMask from 'vue-the-mask';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import { routes } from './router/router-config.js';
import store from './store';

Vue.use(Router);
Vue.use(VueTheMask);
Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
