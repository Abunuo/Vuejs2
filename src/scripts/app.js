import '../styles/app.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
// import _ from 'lodash';

import router from './routes/router.js';
import store from './store/store.js';

//引入 debug，浏览器需要设置 localStorage.debug
localStorage.debug = 'vue:*';

//根据开发状态区别是否运行 vue-devtools

if (process.env.NODE_ENV == 'production') {
    Vue.config.devtools = false;
} else {
    Vue.config.devtools = true;
}

Vue.use(VueRouter);
// Vue.use(_);


//注册全局指令   获取该指令可以用 Vue.directive('my-directive')
// Vue.directive('my-directive', {
//   bind: function () {},
//   inserted: function () {},
//   update: function () {},
//   componentUpdated: function () {},
//   unbind: function () {}
// })



new Vue({
  router,
  store,
  // el: '#app',
}).$mount('router-view'); //等同于 el: '#app'  https://segmentfault.com/a/1190000009467029
