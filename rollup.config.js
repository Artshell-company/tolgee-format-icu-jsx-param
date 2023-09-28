import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import sizes from 'rollup-plugin-bundle-size';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  input: 'src/index.ts',
  preserveSymlinks: true,
  output: [
    {
      file: 'dist/tolgee-format-icu-jsx-param.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/tolgee-format-icu-jsx-param.cjs.min.js',
      format: 'cjs',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'dist/tolgee-format-icu-jsx-param.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tolgee-format-icu-jsx-param.esm.mjs',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/tolgee-format-icu-jsx-param.esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'dist/tolgee-format-icu-jsx-param.esm.min.mjs',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      name: '@tolgee/format-icu',
      file: 'dist/tolgee-format-icu-jsx-param.umd.js',
      format: 'umd',
      sourcemap: true,
    },
    {
      name: '@tolgee/format-icu',
      file: 'dist/tolgee-format-icu-jsx-param.umd.min.js',
      format: 'umd',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  watch: {
    clearScreen: false,
  },
  plugins: [
    typescript({
      outDir: './lib',
      sourceMap: true,
      noEmit: true,
      tsconfig: 'tsconfig.prod.json',
    }),
    nodeResolve(),
    sizes(),
    visualizer(),
  ],
};
