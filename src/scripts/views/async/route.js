//import async from './async.vue';
// const async = r => require.ensure([], () => r(require('./async.vue')), 'async');
const async = () => import(/*webpackChunkName: 'async'*/'./async.vue')

export default {
    path: '/async',
    component: async,
}
