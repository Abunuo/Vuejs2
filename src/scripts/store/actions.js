import * as type from './mutations-types.js';

export const log = ({ commit, state }, index=0) => {
  // state.index.index = index+1;  //严格模式下只能使用 mutatsions 所以会报错
  commit(type.CHANGEINDEX, index);
};
