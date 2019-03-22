import type from './mutations-types.js';

export const logName = ({ commit, state }) => {
  // state.module1.index = index+1;  //严格模式下只能使用 mutations 所以会报错
  commit(type.CHANGELOGNAME);
};
