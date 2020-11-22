<template>
  <div>
    <pre>
    uex 状态管理工具
    可以理解成多个组件都需要共享一个变量，把都需要共享的变量放在一个公共的地方，方便组件拿去
    这个好像不用像react那样使用model每次都要绑定
    一共5个核心概念
    State
    Getter:类似于 computed
    Mutation
    Action
    Module
  </pre>
    <div>
      这个
      <button @click="clickToCommit">+++</button>
      {{ $store.state.counter }}
    </div>
    <div style="margin-top: 10px;">
      使用dispatch（需要异步的时候，比如说请求）更新vuex
      {{ $store.state.changeObj }}
      <button @click="clickToDispatch">发请求咯</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "learnVUEX",
  data() {
    return {}
  },
  methods: {
    /*
    * dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('action方法名',值)
    * commit：同步操作，写法：this.$store.commit('mutations方法名',值)
    * */
    clickToCommit() {
      this.$store.commit({
        type: 'add',
        payload: {
          val: 2
        }
      })
      // this.$store.getters.addMore(2)
    },
    clickToDispatch() {
      const payload = {
        name: 'asd', age: 15, fr: 3
      };
      this.$store.dispatch({
        type:'changeSth',
        payload
      }).then((val)=>{
        console.log({...val});
      })
    },
  }
}
</script>

<style scoped>

</style>
