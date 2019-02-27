//import grid from './grid.vue';
const grid = r => require.ensure([], () => r(require('./grid.vue')));

export default {
    path: '/grid',
    component: grid,
}
