const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = process.env.NODE_ENV;
// VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中;
process.env.VUE_APP_PROJECT = require('./package.json').name

module.exports = {
  publicPath: env === 'development' ? '/' : './',
  lintOnSave: false,
  pages: {
    index: {
      entry: './src/index.js',
      template: './src/index.html',
      filename: 'index.html'
    }
  },
  productionSourceMap: false,
  css: {           
    sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }, 
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  configureWebpack: config => {
    plugins = [
      new CopyWebpackPlugin([{ from: 'dist', to: 'dist' }])
    ]
  }
};
