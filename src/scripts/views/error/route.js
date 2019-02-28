//import error from './error.vue';
// const error = r => require.ensure([], () => r(require('./error.vue')), 'error');
const error = () => import(/*webpackChunkName: 'error'*/'./error.vue')
export default {
    path: '*',
    component: error,
}
