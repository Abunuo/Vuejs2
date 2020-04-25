//import vuex from './vuex.vue';
// const vuex = r => require.ensure( [], () => r (require('./vuex.vue')), 'vuex');

const form = () => import(/* webpackChunkName: "vuex" */ './form.vue');

export default {
    path: '/form',
    component: form,
}
