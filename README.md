# h5-template

vue-cli3 + vuex + axios搭建的h5空项目模板，可以直接使用，写自己的业务代码就可以了

+ css预处理器
引入sass预处理器

+ 全局注入通用的 variableb.scss，减少工作量
```
// 给 sass-loader 传递选项
sass: {
data: `@import "@/assets/scss/variable.scss";`
}

```
+ 移动 web 的适配方案
项目使用了flexible + postcss-px2rem 来做rem自适应
index.html的这个meta标签需要去掉
```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
+ ajax请求
同时简单封装了axios请求，可以更加方便我们开发 `src/js/api.js`

+ 常用的 js 工具类封装 `src/js/utils.js`

+ 项目中如果需要引入第三方的UI框架，如果UI框架的单位是px，会被转换成rem单位
使用postcss-px2rem-exclude把不需要转换的文件排除，修改postcss.config.js

```
plugins: {
	autoprefixer: {},
	"postcss-px2rem-exclude": {
		remUnit: 75,
		exclude: /node_modules|folder_name/i
	}
}
```
还有另外一种解决方案是将组件中px转化为PX，避免被转成rem


+ 本地环境使用代理，这样可以避免本地开发跨域
```
devServer: {
	proxy: {
		'/': {
			target: 'https://m.allpyra.com/',
			secure: true,
			changeOrigin: true,
			ws: false,
		},
	},
},

```

+ 设置了代理之后，控制台一直打印 WebSocket链接错误
修改 vue.config.js中配置devServer.proxy的ws为false

+ 使用别名

```
chainWebpack: (config)=>{
	config.resolve.alias
	.set('@', resolve('src'))
	.set('components',resolve('src/components'))
	.set('static',resolve('src/static'))
	.set('api',resolve('src/js/api.js'))
	.set('utils',resolve('src/js/utils.js'))
},

```
## 

项目还有很多不完善的地方，后续将完善补充

## 相关链接

- [vue-cli3官方文档](https://cli.vuejs.org/zh/)
- [chainWebpack](https://github.com/neutrinojs/webpack-chain#getting-started)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
