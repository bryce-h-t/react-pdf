import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' assert { type: 'json' };

const cjs = {
  exports: 'named',
  format: 'cjs',
  interop: 'compat',
};

const esm = {
  format: 'es',
};

const getCJS = (override) => Object.assign({}, cjs, override);
const getESM = (override) => Object.assign({}, esm, override);

const babelConfig = () => ({
  babelrc: false,
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
  plugins: [['@babel/plugin-transform-runtime', { version: '^7.19.6' }]],
});

const external = [/@babel\/runtime/, ...Object.keys(pkg.dependencies)];

const getPlugins = ({ browser }) => [
  babel(babelConfig()),
  replace({
    preventAssignment: true,
    values: {
      BROWSER: JSON.stringify(browser),
    },
  }),
];

const serverConfig = {
  input: './src/index.js',
  output: [getESM({ file: 'lib/index.js' }), getCJS({ file: 'lib/index.cjs' })],
  external,
  plugins: getPlugins({ browser: false }),
};

const browserConfig = {
  input: './src/index.js',
  output: [
    getESM({ file: 'lib/index.browser.js' }),
    getCJS({ file: 'lib/index.browser.cjs' }),
  ],
  external,
  plugins: getPlugins({ browser: true }),
};

export default [serverConfig, browserConfig];
