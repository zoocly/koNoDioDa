<template>
  <div>
    son1: {{num1}}<br/>
    <label>
      <input type="text" :value="num1" @input="inputChange">
    </label>
    <slot name="a">插槽slot，跟react的children一样的</slot>
    <slot name="b">多个插槽，若用ract，则用props来传递</slot>
  </div>
</template>

<script>
export default {
  props:{
    num1:Number,
  },
  data(){
    return {
    }
  },
  methods:{
    inputChange(e){
      // this.num = e.target.value;
      this.$emit('getSon1Num',e.target.value)
    }
  },
  watch:{
    num1(val){
      /*
      * 作用一般是监听树改变，重新请求页面数据
      * 也可以通过watch来监听num1的改变，发送this.$emit
      * 有点像 react 中的 componentWillReceiveProps 将props的东西放在state中，弱state中存有之前值，可比较
      * 之后有hook了，使用useEffect(()=>{},[值名])来触发
      * */
    }
  },
}
</script>

<style scoped>

</style>
