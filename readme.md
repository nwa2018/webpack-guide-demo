### 前置安装
``` javascript
git clone git@github.com:nwa2018/webpack-guide-demo.git
cd webpack-guide-demo
npm i
npm i nodemon -g
npm i cross-env -g
node环境：选择LTS版本（现在是8.10.0）
```

### demo/getstart
对应[webpack guide getstart](https://webpack.js.org/guides/getting-started/)

> npm run getstart
> npm run getstart2

(在demo/getstart/下即可看到构建后的代码，以下不再赘述)

这两个例子旨在说明webpack的基本使用，webpack支持import与export引入/导出模块

还学到了npx，自动寻找本地的webpack，还有webpack --config指定webpack的配置文件

### demo/asset
对应[Asset Management](https://webpack.js.org/guides/asset-management/)

> npm run asset

讲解webpack怎么打包资源

### demo/output
对应[Output Management](https://webpack.js.org/guides/output-management/)

> npm run asset

讲解最基础的webpack的output与html-webpack-plugin
```
You might be wondering how webpack and its plugins seem to "know" what files are being generated. The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles.
```

### demo/development
对应[Development](https://webpack.js.org/guides/development/)

> npm run development
> npm run development2

讲解webpack --watch, webpack-dev-server, webpack-dev-middleware

### hotmodule
对应[Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)

> npm run hotmodule
> npm run hotmodule2

js与样式的热重载，js的热重载需要比较麻烦的配置，并且入口文件无法热重载

### treeshaking
对应[Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

> npm run treeshaking

学习“摇树”的相关概念，隐患，使用

### production
对应[Production](https://webpack.js.org/guides/production/)

> npm run production-dev
> npm run production-prod

使用webpack-merge处理生产环境

使用webpack.DefinePlugin来定node环境，某些库在打包的时候会因此优化代码，比如:react，但是在webpack配置文件里面依然无法访问process.env.NODE_ENV，参考[#2537](https://github.com/webpack/webpack/issues/2537)，试了cross-env是可以的

# codesplitting
对应[Code Splitting](https://webpack.js.org/guides/code-splitting/)

> npm run codesplit
> npm run codesplit-import

学习了代码分割CommonsChunkPlugin与代码分割

# lazyload
对应[Lazy Loading](https://webpack.js.org/guides/lazy-loading/)

> npm run lazyload

通过魔法注释的方式去异步加载脚本，优化页面加载速度

# cache
对应[Caching](https://webpack.js.org/guides/caching/)

> npm run cache
> npm run cache2
> npm run cache3

hash 是构建的哈希值

chunkhash 是模块文件的哈希值

`webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk` 所以说低版本webpack有可能每次编译出来的文件哈希值都是不一样的
```
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest'
})
```
抽取公共模块
```
entry: {
  main: './src/index.js',
  vendor: [
    'lodash'
  ]
},
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor'
}), // vendor要放在manifest之前
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest'
})
```
引入新模块的时候，因为模块id变化了，可能导致文件也跟着变化了，解决方案如下
```
new webpack.HashedModuleIdsPlugin()
```
