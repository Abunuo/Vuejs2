//import error from './error.vue';
const error = r => require.ensure([], () => r(require('./error.vue')), 'error');
export default {
    path: '*',
    component: error,
}
