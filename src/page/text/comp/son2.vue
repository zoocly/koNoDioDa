<template>
  <div>
    son2:{{num2}}<br/>
    <label>
      <input type="text" :value="num2" @input="inputChange">
    </label>
    <slot>插槽slot，跟react的children一样的</slot>
  </div>
</template>

<script>
export default {
  props:{
    num2:Number
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
  }
}
</script>

<style scoped>

</style>
