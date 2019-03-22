import type from '../mutations-types.js';

const state = {
  index: 2,
  name: 'aa'
};

const getters = {
  getName: state => state.name
};

const mutations = {
  [type.CHANGEINDEX](state, index) {
    state.index = index;
  },
  CHANGELOGNAME(state) {
    state.name = state.name+state.index;
  }
}
const actions = {
    log({ commit, state }, index=0) {
      // state.module1.index = index+1;  //严格模式下只能使用 mutations 所以会报错
      commit(type.CHANGEINDEX, index);
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}
