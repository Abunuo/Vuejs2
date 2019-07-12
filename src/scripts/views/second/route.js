//import second from './second.vue';
// const second = r => require.ensure([], () => r(require('./second.vue')), 'second');
const second = () => import(/*webpackChunkName:"second"*/'./second.vue');
import error from '../error/error.vue'
import vuex from '../vuex/vuex.vue'

export default {
    path: '/second',
    name: 'second',
    component: second,
    children: [{         //配置子路由 ,是个路由对象数组
      path: 'error',
      name: 'error',
      component: error,
    }, {         //配置子路由 ,是个路由对象数组
      path: 'vuex',
      name: 'vuex',
      component: vuex,
    }],

    meta: {             //配置属性 可用老页面拦截，判断是否登录
      requiresAuth: true
    },

    // alias: ['/two'],    //起别名

    // redirect: '/',      //路由重定向
}
