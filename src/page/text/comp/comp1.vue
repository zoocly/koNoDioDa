<template>
<div>
  <div>
    <a href='javascript:void(0)' @click="func1(age)"> 这是子组件 </a>{{name}}
  </div>
</div>
</template>

<script>
export default {
  props:{
    name,
  },
  data(){
    return {
      age:18,
    }
  },
  methods:{
    func1(val){
      /*
      * 这里的子传父的思路和react不一样
      * react的思路：不管是父传子还是子传父，儿子都是通过props来接受。子传父是 父传入一个回调函数来获取儿子的数据
      * vue的思路：父传子，走props；子传父，走this.$emit()函数，第一个参数是向上传递的方法名字，第二个参数是数据
      * */
      this.$emit('toFather',{msg:'儿子传过来的东西'})
    }
  }
}
</script>

<style scoped>

</style>
