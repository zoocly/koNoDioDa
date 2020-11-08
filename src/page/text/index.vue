<template>
  <div>
    我来看看情况{{name}}
    <pre>
      function(){
        return a = 123 但是pre 在react里面就回有问题
      }
    </pre>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'aaaaa'
    }
  },
  mounted() {
    let that=this;
    setTimeout(function (){
      that.name = 'bbbbb';
    },1000)
  }
}
</script>

<style scoped>
</style>
