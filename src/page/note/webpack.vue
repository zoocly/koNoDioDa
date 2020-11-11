<template>
  <div>
    <h1>认识webpack</h1>
    <div>
      模块化打包工具，依赖nde.js环境，node中执行代码需要npm
    </div>
    <div>
      在html文件中，使用命令 webpack 主函数js地址,则会在dist中生成打包好的mian.js文件<br/>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
