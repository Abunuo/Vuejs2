const virtualTable = () => import(/* webpackChunkName: "virtualTable" */ './virtualTable.vue');

export default {
    path: '/virtualTable',
    component: virtualTable,
}
