const path = require('path');
const WebpackNotifier = require('webpack-notifier');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// console.log(path.resolve(__dirname, 'src/fonts'));

module.exports = () => {
   let configure = {};

   if (isDev) {
      //configure.publicPath = path.resolve(__dirname, 'dist');
      configure.css = {
         extract: true,
         sourceMap: true,
      };
      configure.configureWebpack = {
         devtool: 'source-map',
      };
      configure.filenameHashing = false;
   }

   configure.chainWebpack = (config) => {
      config.plugin('notifier').use(WebpackNotifier, [
         {
            title: 'Bootstrap Vue Learn',
            alwaysNotify: true,
            contentImage: path.resolve(__dirname, 'src/assets/logo.png'),
         },
      ]);
   };

   return configure;
};