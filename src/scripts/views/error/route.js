//import error from './error.vue';
const error = r => require.ensure([], () => r(require('./error.vue')));
export default {
    path: '*',
    component: error,
}
