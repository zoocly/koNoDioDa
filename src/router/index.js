import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Text from '../page/text/index'
import Msg from '../page/text/index2'
import LearnWebpack from '../page/note/webpack'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: LearnWebpack },
    // { path: '/text', component: Text }
  ]
})
