# vite-plugin-resolve-externals

[![view on npm](http://img.shields.io/npm/v/vite-plugin-resolve-externals.svg)](https://www.npmjs.com/package/vite-plugin-resolve-externals)
[![npm module downloads per month](http://img.shields.io/npm/dm/vite-plugin-resolve-externals.svg)](https://www.npmjs.org/package/vite-plugin-resolve-externals)

vite plugin resolve externals

## usage
**install**
```bash
npm i -D vite-plugin-resolve-externals
```
**use**
Support setting through parameter transfer, and also support configuring externals item in resolve

```js
// vite.config.js
const resolveExternalsPlugin = require('vite-plugin-resolve-externals');

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // It can be configured here
    resolveExternalsPlugin({
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': () => `
        const E = window.ELEMENT;
        export default E;
        export const Message = E.Message;
        export const MessageBox = E.MessageBox;
        export const Notification = E.Notification;
      `,
      // ...other element-ui members
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectRootDir, 'src'),
      },
    ],
    // or here
    externals: {
      axios: 'axios',
    },
  },
});
```
**src**
```js
import Vue from 'vue'
import ELementUI, { Message, MessageBox, Notification } from 'element-ui'
import axios from 'axios'
```