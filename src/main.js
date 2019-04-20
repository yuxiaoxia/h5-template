import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import FastClick from 'fastclick';
import axios from './js/http';
import './js/filters.js';
import 'lib-flexible';
import "babel-polyfill";
import 'es6-promise/auto';

FastClick.attach(document.body);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


import Toast from '@/components/common/toast/index';
import Loading from '@/components/common/loading/index';
Vue.use(Toast);
Vue.use(Loading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
