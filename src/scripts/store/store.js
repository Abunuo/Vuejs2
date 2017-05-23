import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import * as getters from './getters.js';

//modules
import module1 from './modules/module1.js'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    module1
  },
  strict: true  //运行在严格模式下，发布环境一定禁止！！会影响 v-model
})
