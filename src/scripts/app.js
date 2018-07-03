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
}).$mount('router-view'); //等同于 el: '#app'  https://blog.csdn.net/c2311156c/article/details/80415633
