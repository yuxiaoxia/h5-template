const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
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
  lintOnSave: false,
  css: {
    modules: true,
    loaderOptions: {
      postcss: {
        plugins: [
            require('postcss-px2rem')({remUnit: 75}), // 换算的基数
        ]
      },
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/assets/scss/variable.scss";`
      }
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
    .set('@', resolve('src'))
    .set('components',resolve('src/components'))
    .set('static',resolve('src/static'))
    .set('api',resolve('src/js/api.js'))
    .set('utils',resolve('src/js/utils.js'));
  },
  pluginOptions: {
    stylelint: {},
  }
}
