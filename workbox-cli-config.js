module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{html,css,js,ico,json,txt,png,jpg,svg,md}"
  ],
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "package.json",
    "package-lock.json",
    "webpack.config.js",
    ".babelrc",
    "src/**/**/*",
    "node_modules/**/**/*"
  ]
};
