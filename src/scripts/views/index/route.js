//import index from './index.vue';
//等同于 import，按需加载当前组件
const index = r => require.ensure( [], () => r (require('./index.vue')));

export default {
    path: '/',
    component: index,
}
