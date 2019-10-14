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
  }
}