<template>
  <div>
    <Comp1 :clickList="clickList"
           :clickNum="clickNum"
           :name="name"
           :url="url"
           @toFather="getSonInfo"/>
    我来看看情况{{ name }}
    <pre>
      function(){
        return a = 123 但是pre 在react里面就回有问题
      }
    </pre>
    <a v-bind:href="url">a标签绑定动态连接使用v-bind <strong>来绑定标签的属性</strong></a><br/>
    <a :href="url" target="_blank">使用v-bind 简写 <strong>来绑定标签的属性</strong></a>
    <div @click="divClick">
      <button :class="[clickNum%2 === 0 ? 'red' : 'blue']" @click="btnClick">{{ clickText(12) }}</button>
      <!--修饰符 .stop 阻止事件冒泡-->
      <button :class="[clickNum%2 === 0 ? 'red' : 'blue']" @click.stop="btnClick">{{ clickText() }}</button>
    </div>
    <div style="margin-top: 10px">
      <ul>
        <li v-for="({ check, label }, index) in clickList" :key="index" :class="{red:check}"
            :style="{fontSize:`${fontSize}px`}" v-on:click="(e)=>liClick(e)">{{ label }}
        </li>
      </ul>
    </div>
    <div>
      <form action="baidu">
        <!--修饰符 .prevent 阻止默认事件-->
        <input type="submit" value="提交" @click.prevent="submit">
      </form>
    </div>
    <div v-if="tableList.length > 0">
      <table border="1" cellpadding="0" cellspacing="0" class="table">
        <thead>
        <tr>
          <td></td>
          <td>书籍名称</td>
          <td>出版日期</td>
          <td>价格</td>
          <td>购买数量</td>
          <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in tableList" :key="item.index">
          <td>{{ item.index }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button :disabled="item.num <= 1" @click="numDel(item)"> -</button>
            {{ item.num }}
            <button @click="numAdd(item)"> +</button>
          </td>
          <td>
            <button @click="removeTableItem(item)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>
        总计{{ allPrice }}
      </div>
    </div>
    <div v-else>
      购物车为空
    </div>
    <div>
      <label v-for="item in tableList" :key="item.index" :for="item.name">
        <input :id="item.name" v-model="checkboxArr" :name="item.name" :value="item.name"
               type="checkbox">{{ item.name }}
      </label>
      {{ checkboxArr }}
    </div>
    <div>
      <label>
        <select v-model="selectArr" multiple style="width: 100px">
          <option v-for="item in tableList" :id="item.name" :key="item.index" :value="item.name">{{ item.name }}
          </option>
        </select>
        {{ selectArr }}
      </label>
    </div>

  </div>
</template>

<script>
import Comp1 from './comp/comp1';

export default {
  components: {Comp1},
  mounted() {
    let that = this;
    console.log(that.clickNum)
    setTimeout(function () {
      that.name = 'bbbbb';
    }, 1000)
  },
  destroyed() {
    this.clickNum = 0;
  },
  data() {
    /*
    * 为啥data这边要使用函数来return一个对象
    * 通过函数生成的对象，之间互不影响，return {} 的对象每个都有新的内存地址
    * 为什么要 return {}，不 return obj。因为obj的内存地址都指向了同一个
    * 也可以理解为 对象 是引用数据（不是基本数据类型），直接使用浅复制(都算不上)，所以会造成深浅复制带来的bug
    * */
    return {
      name: 'aaaaa',
      url: 'https://www.baidu.com',
      clickNum: 0,
      fontSize: 20,
      checkboxArr: [],
      selectArr: [],
      clickList: [
        {label: 'aaa', check: false},
        {label: 'bbb', check: false},
        {label: 'ccc', check: false},
      ],
      tableList: [
        {index: 1, name: 'zxc', date: '2020-1-1', price: 123, num: 2},
        {index: 2, name: 'sdf', date: '2020-1-1', price: 44, num: 2},
        {index: 3, name: 'ggd', date: '2020-1-1', price: 22, num: 2}
      ],
    }
  },
  // data中需要组合的数据，就在computed中组合
  computed: {
    clickText: function () {
      return (val) => {
        console.log(val);
        if (this.clickNum % 2 !== 0) {
          return '点我变红';
        } else {
          return '点我变蓝';
        }
      }
    },
    allPrice() {
      return this.tableList.reduce((all, item) => {
        return all + item.num * item.price
      }, 0)
    }
  },
  methods: {
    getSonInfo(val) {
      console.log('接收到的参数', val);
    },
    submit() {
      console.log('submit', this.tableList);
    },
    divClick() {
      //btn和外部都有点击事件：事件冒泡 首先从btn到div
      console.log('divClick');
    },
    // ES5的老写法
    btnClick: function (e) {
      // e.stopPropagation(); // 阻止事件冒泡
      console.log('btnClick');
      this.clickNum++;
    },
    // 使用函数增强类型
    liClick({target: {textContent = undefined} = {}} = {}) {
      this.clickList = this.clickList.map(it => {
        return {...it, check: false}
      });
      let find = this.clickList.find(it => it.label === textContent);
      find.check = true;
    },
    numDel(item) {
      this.tableList.find(it => it.index === item.index).num--;
    },
    numAdd(item) {
      this.tableList.find(it => it.index === item.index).num++;
    },
    removeTableItem(item) {
      const {index} = item;
      this.tableList = this.tableList.filter(it => it.index !== index);
    },
  }
}
</script>

<style scoped>
.red {
  background: #dc4141;
}

.blue {
  background: #52529c;
  color: azure;
}

.table td {
  width: 100px;
}
</style>
