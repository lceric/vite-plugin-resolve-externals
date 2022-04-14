/**
 * @type {import('.').ResolveExternals}
 */
module.exports = function resolveExternals(externals = {}) {
  const name = 'vite-plugin-resolve-externals';
  return [
    {
      name: `${name}:resolveId`,
      resolveId(id) {
        if (externals[id]) {
          // Avoid vite builtin `vite:resolve` plugin
          return id;
        }
      },
    },
    {
      name,
      config(config) {
        const { resolve } = config;
        Object.assign(externals, resolve.externals);
        return config;
      },
      load(id) {
        const fnOrIife = externals[id];
        if (!fnOrIife) return null;

        return typeof fnOrIife === 'function'
          ? fnOrIife(id)
          : `const M = window['${fnOrIife}']; export default M`;
      },
    },
  ];
}
