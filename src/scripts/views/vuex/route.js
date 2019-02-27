//import vuex from './vuex.vue';
const vuex = r => require.ensure( [], () => r (require('./vuex.vue')));

export default {
    path: '/vuex',
    component: vuex,
}
