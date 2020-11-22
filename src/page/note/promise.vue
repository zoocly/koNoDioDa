<template>
<div>
  <pre>
    什么时候会用到promise=》异步操作
    new => 构造函数 1.保存状态信息  2.执行传入的函数
    在执行回调函数时，会传入2个参数 resolve， reject，也都是函数
    promise中写异步函数代码，在then中执行回调函数

    promise 三种状态
    1 pending 等待状态
    2 fulfill 满足状态，在调用resolve时，就在处于该状态
    3 reject 拒绝状态
  </pre>
</div>
</template>

<script>
export default {
name: "promise"
}
</script>

<style scoped>

</style>
