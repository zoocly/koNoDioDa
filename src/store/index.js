import Vuex from 'vuex';
import Vue from 'vue';

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex);

const modulesA = import('../store/modules/modulesA');

const store = new Vuex.Store({
  state: {
    counter: 0,
    changeObj: {
      name: 'asd',
      age: 13
    }
  },
  actions,
  // 数据处理的逻辑都在里面
  mutations,
  getters,
  modules:{
    a:modulesA
  }
});
export default store;
