import '../styles/app.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
// import _ from 'lodash';

import router from './routes/router.js';
import store from './store/store.js';

Vue.use(VueRouter);
// Vue.use(_);

new Vue({
  router,
  store,
  // el: '#app',
}).$mount('router-view'); //等同于 el: '#app'  https://segmentfault.com/a/1190000009467029
