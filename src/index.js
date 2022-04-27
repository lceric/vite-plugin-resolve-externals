/**
 * @type {import('.').ResolveExternals}
 */
module.exports = function resolveExternals(externals = {}) {
  return {
    name: 'vite-plugin-resolve-externals',
    // It should be run before the vite builtin `vite:resolve`
    enforce: 'pre',
    resolveId(id) {
      if (externals[id]) {
        // Avoid vite builtin `vite:resolve` plugin
        return id;
      }
    },
    config(config) {
      // Merge externals from `config.resolve`
      Object.assign(externals, config.resolve.externals);

      if (!config.optimizeDeps) config.optimizeDeps = {};
      if (!config.optimizeDeps.exclude) config.optimizeDeps.exclude = [];

      let exclude = Object.keys(externals);
      if (config.optimizeDeps.include) {
        // If the user force the module to be Pre-building, we should filter out it
        exclude = exclude.filter(key => !config.optimizeDeps.include.includes(key));
      }
      // Avoid vite Pre-building
      config.optimizeDeps.exclude.push(...exclude);
    },
    load(id) {
      const fnOrIife = externals[id];
      if (!fnOrIife) return null;

      return typeof fnOrIife === 'function'
        ? fnOrIife(id)
        : `const M = window['${fnOrIife}']; export default M`;
    },
  };
};
