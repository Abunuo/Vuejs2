//import grid from './grid.vue';
// const grid = r => require.ensure([], () => r(require('./grid.vue')), 'grid');
const grid = () => import(/*webpackChunkName: 'grid'*/'./grid.vue');

export default {
    path: '/grid',
    component: grid,
}
