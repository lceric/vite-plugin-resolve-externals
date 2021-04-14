const path = require('path')
const { defineConfig } = require('vite')
const reactRefresh = require('@vitejs/plugin-react-refresh')
const resolveExternalsPlugin = require('vite-plugin-resolve-externals')
const projectRootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  jsx: 'react',
  plugins: [
    reactRefresh(),
    resolveExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
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
})
