const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, './assets/js/'),
    filename: 'script.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] },
      files: ['./*.html', './assets/css/*.css']
    })
  ]
};
