# vite-plugin-resolve-externals
vite plugin resolve externals

## usage
**install**
```bash
npm i -D vite-plugin-resolve-externals
```
**use**
```js
// vite.config.js
const resolveExternalsPlugin = require('vite-plugin-resolve-externals');

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    resolveExternalsPlugin({
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectRootDir, 'src'),
      },
    ],
    externals: {
      axios: 'axios',
    },
  },
});
```
**src**
```js
import Vue from 'vue'
import ELementUI from 'element-ui'
import axios from 'axios'
```