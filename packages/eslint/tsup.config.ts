import { defineConfig } from 'tsup';

export default defineConfig({
  name: '@tyangs/eslint',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  outDir: 'dist',
  footer: ({ format }) => {
    if (format === 'cjs') {
      return {
        js: `if (module.exports.default) module.exports = module.exports.default;`,
      };
    }
  },
});
