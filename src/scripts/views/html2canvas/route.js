//import html2canvas from './html2canvas.vue';
// const html2canvas = r => require.ensure( [], () => r (require('./html2canvas.vue')), 'html2canvas');
const html2canvas = () => import(/*webpackChunkName: "html2canvas"*/'./html2canvas.vue')
export default {
    path: '/html2canvas',
    component: html2canvas,
}
