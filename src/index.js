/**
 * vite resolve-externals
 */
function resolveExternals(externals = {}) {
  return {
    name: 'vite-plugin-resolve-externals',
    config(config) {
      const { resolve } = config;
      Object.assign(externals, resolve.externals);
      return config;
    },
    resolveId(id) {
      if (externals[id]) {
        return id;
      }
    },
    load(id) {
      if (externals[id]) {
        return `const externals = window.${externals[id]};
        export default externals`;
      }
    },
  };
}

module.exports = resolveExternals
