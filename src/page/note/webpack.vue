<template>
  <div>
    <h1>认识webpack</h1>
    <pre>
      <strong>基础配置</strong>

      模块化打包工具，依赖nde.js环境，node中执行代码需要npm
      在html文件中，使用命令 webpack 主函数main.js地址,则会在dist中生成打包好的main.js文件
      新建 webpack.config.js 到项目根目录
      配置如下：
      module.exports = {
          entry:'./src/main.js',
          output:{
            path:'./dist',
            filename:'a.js'
          }
        }

      使用npm init 构建 package.json

      在package.json中可以添加脚本，添加 build 命令：webpack

      注意：
      每个项目都有自己的webpack版本，跟全局的可能配置或者版本不一样
      所以使用命令 npm install webpack --save-dev 安装项目webpack到开发时依赖（devDependencies）
      在终端（cmd 和 项目 里面输命令行的地方）直接输入webpack 都是在全局找webpack来打包，使用 npm run build (上面添加的命令) 则会先在本地找webpack来打包

      关于 devDependencies 和 dependencies 自己理解：
      开发时依赖，应该是项目配置打包等一系列操作中才用到
      生产时依赖，项目在运行的时候需要的东西，不管是在开发还是到正式环境运行 都需要


      <strong>css 和 less 的配置编译</strong>
      使用 npm install --save-dev css-loader 和 npm install style-loader --save-dev 来让css也能打包
      使用 mini-css-extract-plugin,把css less配置替换为
      完成对css和less的打包，且能单独分离css样式，避免打包出现const <strong>ps：图片还回有const的问题</strong>
      最终配置增加：
      module.exports = {
        module:{
          rules:[
            {
              test: /\.css$/,
              use : [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" }
              ]
            },
            {
              test: /\.less$/,
              use : [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" },
                { loader: "less-loader" }
              ]
            },
          ],
        }
        plugins: [
          new MiniCssExtractPlugin({
            filename: "bundle.css" // 输入格式
          }),
        ]
      }


      <strong>解决每次修改文件需要打包的问题（把html的项目不通过脚手架转换到vue项目）</strong>
      安装 vue 到 生产时依赖 yarn add vue，
      在index.js增加
      import Vue from 'vue';
      new Vue({
        el:'#app',
        data:{
          msg:'Vue123'
        }
      })
      html 增加
      &lt;div id="app">{\{ msg }}&lt;/div>

      但是vue存在不同的编译环境，需在配置中增加才能运行。最后不需要这么配置了
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      }

      将app提出到.vue文件，这样会报错，缺少loader 装他 yarn add vue-loader vue-template-compiler --dev

      再将 const VueLoaderPlugin = require('vue-loader/lib/plugin'); 配置好
        plugins: [
            new VueLoaderPlugin(),
      ],
      最后将new Vue中添加 render: h => h(App)才能渲染页面
       ps： <strong>造成这个原因是因为 runtime-compiler 和 runtime-only</strong>
            造成会这么的写的原因是在 vue init 的时候没选对
      runtime-compiler： template -> ast（抽象语法树）-> render -> 虚拟DOM  -> DOM

      runtime-only： render -> 虚拟DOM  -> DOM
      优势：1 代码更少
           2 性能更高
      ps： 但是，但是在脚手架搭建出来的vue项目 是使用的第一种不写render的方法
           直接在main.js中更改，2种方法都可以实现，也不存在以上问题
           所以以上两种方式，打印App，发现template被编译过了，是由 vue-template-compiler 处理了

      增加html的模版插件，因为现在 react 和 vue 都是使用SPA（单页面应用）
      之后 index.html 都不需要添加 css的link 和 js的script
      配置增加
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      plugins: [
        new HtmlWebpackPlugin({
          template: "index.html"
        })
      ],

      <strong>最后的最后</strong>
      使用 webpack-merge 来分离配置文件
      ps：webpack-merge可能是版本问题，需要使用语法 webpackMerge.merge()
    </pre>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
strong {
  color: #dc4141;
  font-size: 16px;
}
</style>
