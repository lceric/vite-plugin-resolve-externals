const path = require('path')
const { defineConfig } = require('vite')
const reactRefresh = require('@vitejs/plugin-react-refresh')
const resolveExternalsPlugin = require('../..')
const projectRootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  jsx: 'react',
  plugins: [
    reactRefresh(),
    resolveExternalsPlugin({
      react: 'React',
      // Return custom resolve-externals code by function
      'react-dom': () =>
        `const React = window.ReactDOM; export { React as default }`,
      antd: () => `
        const antd = window.antd;
        export { antd as default };
        export const Button = antd.Button
      `,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectRootDir, 'src'),
      },
    ],
  },
  // optimizeDeps: {
  //   include: ['react']
  // }
})
