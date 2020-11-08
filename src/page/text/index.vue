<template>
  <div>
    我来看看情况{{name}}
    <pre>
      function(){
        return a = 123 但是pre 在react里面就回有问题
      }
    </pre>
    <a v-bind:href="url">a标签绑定动态连接使用v-bind <strong>来绑定标签的属性</strong></a><br/>
    <a :href="url" target="_blank">使用v-bind 简写 <strong>来绑定标签的属性</strong></a>
    <div>
      <button @click="btnClick" :class="[clickNum%2 === 0 ? 'red' : 'blue']">{{clickText}}</button>
    </div>
    <div style="margin-top: 10px">
      <ul>
        <li v-for="{ check, label } in clickList" :class="{red:check}" :style="{fontSize:`${fontSize}px`}" v-on:click="(e)=>liClick(e,'123')">{{label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let that=this;
    setTimeout(function (){
      that.name = 'bbbbb';
    },1000)
  },
  destroyed() {
    this.clickNum = 0;
  },
  data(){
    return {
      name: 'aaaaa',
      url:'https://www.baidu.com',
      clickNum:0,
      fontSize:20,
      clickList:[
        {label:'aaa',check:false},
        {label:'bbb',check:false},
        {label:'ccc',check:false},
        ]
    }
  },
  // data中需要组合的数据，就在computed中组合
  computed:{
    clickText:function (){
      if(this.clickNum%2 !== 0){
        return '点我变红';
      }else {
        return '点我变蓝';
      }
    }
  },
  methods:{
    // ES5的老写法
    btnClick:function (){
      this.clickNum++;
    },
    // 使用函数增强类型
    liClick({ target:{ textContent = undefined } = {} } = {}, a){
      this.clickList = this.clickList.map(it=>{
        return {...it,check:false}
      });
      let find = this.clickList.find(it => it.label === textContent);
      find.check = true;
    }
  }
}
</script>

<style scoped>
.red {
  background: #dc4141;
}
.blue{
  background: #52529c;
  color: azure;
}
</style>
