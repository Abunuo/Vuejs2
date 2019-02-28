//import vuex from './vuex.vue';
// const vuex = r => require.ensure( [], () => r (require('./vuex.vue')), 'vuex');

const vuex = () => import(/* webpackChunkName: "vuex" */ './vuex.vue');

export default {
    path: '/vuex',
    component: vuex,
}
