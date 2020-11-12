<template>
  <div>
    <h1>认识webpack</h1>
    <div>
      模块化打包工具，依赖nde.js环境，node中执行代码需要npm
    </div>
    <div>
      在html文件中，使用命令 webpack 主函数js地址,则会在dist中生成打包好的main.js文件<br/>
      <pre>
        module.exports = {
          entry:'./src/main.js',
          output:{
            path:'./dist',
            filename:'a.js'
          }
        }
      </pre>
      <div>
        新建 webpack.config.js 到项目根目录，在使用npm init 构建 package.json(* 自从 v4.0.0 版本开始，webpack 不再需要配置文件
        * 但是又有用)
      </div>
      在package.json中可以添加脚本，添加build
      <div>
        每个项目都有自己的webpack版本，跟全局的可能配置或者版本不一样<br/>
        所以使用命令 npm install webpack --save-dev 安装项目webpack到开发时依赖（devDependencies）<br/>
        在终端（cmd 和 项目 里面输命令行的地方）直接输入webpack 都是在全局找webpack来打包，使用 npm run build 则会先在本地找webpack来打包
      <strong>
        <pre>
          自己理解：
          开发时依赖，应该是项目配置打包等一系列操作中才用到
          生产时依赖，项目在运行的时候需要的东西，不管是在开发还是到正式环境运行 都需要
        </pre>
      </strong>
      </div>
      <br/>
      <br/>
      <div>
        还要使用 npm install --save-dev css-loader 和 npm install style-loader --save-dev 来让css也能打包进去
        <pre>
          配置添加
          module.exports = {
            module: {
              rules: [
                {
                  test: /\.css$/,
                  use: [ 'style-loader', 'css-loader' ]
                }
              ]
            }
          }
        </pre>
      </div>
      <div>
        安装 mini-css-extract-plugin,把css less配置替换为
        <pre>
          const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        </pre>
        <div>
          这样能让css和less分离到单独的css文件，避免打包出现const, <strong style="color: red">现在图片还有这个问题，未解决</strong>
          <br/>
          <strong>每次编译需要打包，不能像一般项目使用yarn start</strong>
        </div>
      </div>
      <div>
        <pre>
          安装 vue 到 生产时依赖 yarn add vue，在index.js增加
          import Vue from 'vue';
          new Vue({
            el:'#app',
            data:{
              msg:'Vue123'
            }
          })

          html 增加 &lt;div id="app">{{msg}}&lt;/div>
        </pre>
        <div>
          但是vue存在不同的编译环境，需在配置中增加才能运行
          <pre>
            resolve: {
              alias: {
                'vue$': 'vue/dist/vue.esm.js'
              }
            }
          </pre>
        </div>
      </div>
      <div>
        将app提出到.vue文件，这样会报错，缺少loader 装他 yarn add vue-loader vue-template-compiler --dev
      </div>
      <pre>
        再将 const VueLoaderPlugin = require('vue-loader/lib/plugin'); 配置好
        plugins: [
            new VueLoaderPlugin(),
          ],
        最后将new Vue中添加 render: h => h(App)才能渲染页面
      </pre>
      <div>
        增加插件 const HtmlWebpackPlugin = require('html-webpack-plugin');
        <pre>
          plugins: [
            new HtmlWebpackPlugin({
              template: "index.html"
            })
          ],
        </pre>
        index模版不需要在添加 scirpt 和 link
      </div>
      <div> 分离项目配置文件 使用依赖 webpack-merge 遇到的坑 webpackmerge.merge() </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
