import * as type from '../mutations-types.js';

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
    return state.index+state.name
  }
}

export default {
  state,
  getters,
  mutations
}
