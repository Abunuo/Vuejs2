import second from './second.vue';

export default {
    path: '/second',
    component: second,
    // children: [{         //配置子路由 ,是个路由对象数组
    //   path: 'second',
    //   component: second,
    // }],

    meta: {             //配置属性 可用老页面拦截，判断是否登录
      requiresAuth: true
    },

    // alias: ['/two'],    //起别名

    // redirect: '/',      //路由重定向
}