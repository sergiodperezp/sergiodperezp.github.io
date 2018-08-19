module.exports = {
  'globDirectory': './',
  'globPatterns': [
    '**/*.{html,css,js,ico,json,txt,png,jpg,svg}'
  ],
  'swDest': 'sw.js',
  'globIgnores': [
    'workbox-config.js',
    'node_modules/**/**/*',
    'src/**/**/*',
    '.babelrc',
    'LICENSE',
    'package.json',
    'package-lock.json',
    'README.md',
    'webpack.config.js'
  ]
};
