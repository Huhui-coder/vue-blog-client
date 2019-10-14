const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = {
  chainWebpack: config => {
    config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end();

    config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    });
    if (isProduction) {
      // 开启gzip压缩
      config.plugins.push(new CompressionWebpackPlugin({
       algorithm: 'gzip',
       test: /\.js$|\.html$|\.json$|\.css/,
       threshold: 10240,
       minRatio: 0.8
      }))
     }
     if (isProduction) {
      // 开启分离js,打出来的包chunk.js太大了。
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      };
    }
    if (isProduction) {  //开启静态资源,cdn加载。
      config.externals = {
       'vue': 'Vue',
       'vue-router': 'VueRouter',
       'moment': 'moment'
      }
     }
  }
}