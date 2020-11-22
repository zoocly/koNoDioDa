// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store'
import request from "./untils/request";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})

// 全局的设置 不好
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res);
// })

// 建立axios的实例
// const instance = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000,
// });
// instance({
//   url:'/home/multidata',
//   method:'get'
// })

request({
  url:'/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res,'res');
}).catch()
