/*
   按需加载当前组件 ---> 类似 import index from './index.vue';
   参数一：需要的依赖
   参数二：懒加载模块
   参数三：生成文件的名
 */
const index = r => require.ensure( [], () => r (require('./index.vue')),'index');

export default {
    path: '/',
    component: index,
}
