<template>
<div>
  <div>
    father:{{num1}} &nbsp; {{num2}}
    <button @click="interviewSon">通过$children来访问子组件</button>
  </div>
  <div>
    <div>
      vue的编辑作用域就是当前data的属性只能在那个页面上面使用<br/>
      跟react的state差不多嘛<br/>
      跟原生js的作用域还有点不一样：原生js的父级属性，儿子都可以访问，但是父级不能访问儿子
    </div>
    <Son1 @getSon1Num="getSon1Num" :num1="num1"><span slot="a">可以改变slot的默认值</span></Son1>
    <Son2 @getSon1Num="getSon1Num" :num2="num2" ref="son2"/>
  </div>
</div>
</template>

<script>
import Son1 from './comp/son1';
import Son2 from './comp/son2';
export default {
  /*
  * 双向绑定的示例
  * 不需要在son1中通过监听input变化继续把值赋给送son1中的num
  * 而是向上传入，父级在通过props传入到son1中
  * 我觉得vue的双向绑定容易造成混乱（儿子也在改，父亲也在改，写到最后不晓得谁在改了）
  * 这里代码是用react的单项绑定思想来实现所谓双向绑定:不允许改变子组件来改变props的东西
  * */
  components:{
    Son1,Son2
  },
  data(){
    return {
      num1:123,
      num2:456
    }
  },
  methods:{
    getSon1Num(val){
      this.num1 = parseInt(val);
      this.num2 = parseInt(val);
    },
    interviewSon() {
      // 获取全部子组件
      const [son1] = this.$children;
      // son1.inputChange({target:{value:1}})

      /*
      * 通过ref获取单个子组件信息，同react之前写法
      * hook之后通过useRef:
      * const ref = useRef(null);
      * ref.current.function()
      * */
      const {son2} = this.$refs;
      son2.inputChange({target: {value: 2}})
    }
  }
}
</script>

<style scoped>

</style>
