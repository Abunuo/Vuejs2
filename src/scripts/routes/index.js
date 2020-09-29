import VueRouter from 'vue-router';
import store from '../store/store';

import routes from './router';
/*
    mode： hash(#)(default)、history、abstract(node)
 */
const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!store.auth.loggedIn()) {
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
