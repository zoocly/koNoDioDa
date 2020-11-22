import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const modulesA = {
  state:{},
  actions:{},
  mutations:{},
  getters:{}
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    changeObj: {
      name: 'asd',
      age: 13
    }
  },
  actions: {
    changeSth(context, {payload}) {
      console.log(context);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit({
            type: 'change',
            payload
          })
          resolve(payload)
        }, 2000);
      })
    }
  },
  // 数据处理的逻辑都在里面
  mutations: {
    add(state, {payload}) {
      const {val} = payload;
      state.counter += val
    },
    change(state, {payload}) {
      state.changeObj = payload;
    }
  },
  getters: {
    addMore: (state, getter) => (num = 1) => {
      state.counter += num;
    }
    // addMore(state, getter){
    //   return (num = 1)=>{
    //     state.counter += num;
    //   }
    // }
  },
  modules:{
    a:modulesA
  }
});
export default store;
