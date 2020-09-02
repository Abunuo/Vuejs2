const upload = () => import(/* webpackChunkName: "upload" */ './upload.vue')

export default {
  path: '/upload',
  component: upload
}