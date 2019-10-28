const axios = () => import(/*webpackChunkName: 'axios'*/'./axios.vue')

export default {
    path: '/axios',
    component: axios,
}
