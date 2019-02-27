//import grid from './grid.vue';
const grid = r => require.ensure([], () => r(require('./grid.vue')), 'grid');

export default {
    path: '/grid',
    component: grid,
}
