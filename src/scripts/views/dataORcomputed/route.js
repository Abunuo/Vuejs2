//import dataORcomputed from './dataORcomputed.vue';
//等同于 import，按需加载当前组件
const dataORcomputed = r => require.ensure( [], () => r (require('./dataORcomputed.vue')), 'dataORcomputed');


export default {
    path: '/dataORcomputed',
    component: dataORcomputed,
}
