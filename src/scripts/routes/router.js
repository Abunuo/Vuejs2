import VueRouter from 'vue-router';

import index from '../views/index.vue';
import second from '../views/second.vue';
import async from '../views/async.vue';
import vuex from '../views/vuex.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
    }, {
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
    }, {
      path: '/async',
      component: async 
    }, {
      path: '/vuex',
      component: vuex
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/vuex',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
    next({
        // path: '/second',
        // query: { redirect: to.fullPath }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
