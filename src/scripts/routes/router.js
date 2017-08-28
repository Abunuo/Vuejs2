import VueRouter from 'vue-router';

import index from '../views/index.vue';
import second from '../views/second.vue';
import async from '../views/async.vue';
import vuex from '../views/vuex.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
    }, {
      path: '/second',
      component: second,
      // children: {         //配置子路由
      //   path: '/second',
      //   component: second,
      // },

      // meta: {             //配置属性
      //   requiresAuth: true
      // },

      // alias: ['/two'],    //起别名

      // redirect: '/',      //路由重定向
    }, {
      path: '/async',
      component: async
    }, {
      path: '/vuex',
      component: vuex
    }
  ]
});
