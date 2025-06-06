const { defineConfig } = require("@vue/cli-service");
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@ckeditor': path.resolve(__dirname, 'node_modules/@ckeditor')
      }
    }
  },
});
