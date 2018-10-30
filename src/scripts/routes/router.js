import VueRouter from 'vue-router';

import error from '../views/error/route.js';
import index from '../views/index/route.js';
import second from '../views/second/route.js';
import async from '../views/async/route.js';
import vuex from '../views/vuex/route.js';

const router = new VueRouter({
  mode: 'history',
  routes: [
      index,
      second,
      async,
      vuex,

      error//404一定放在最下面
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
