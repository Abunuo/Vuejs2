/*
    正常加载模块
    import index from './index.vue';
 */
/*
    1.按需加载当前组件 (该方法已被摒弃)
    参数一：需要的依赖
    参数二：懒加载模块
    参数三：生成文件的名
    const index = r => require.ensure( [], () => r (require('./index.vue')),'index');

    *** 注：会导致多进入一次 updated 周期（异步加载导致页面重绘）
    *** 组件不建议使用异步加载，导致多次进入 updated 周期
 */
/*
    2.按需加载当前组件 ---> 类似于上述方法
    webpackChunkName： 生成文件的名 

    *** 注：会导致多进入一次 updated 周期（异步加载导致页面重绘）
    *** 组件不建议使用异步加载，导致多次进入 updated 周期
 */
const index = () => import(/* webpackChunkName: "index" */'./index.vue')
export default {
    path: '/',
    component: index,
}
