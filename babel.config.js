export default {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          node: 'current',
          browsers: 'last 2 versions',
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-optional-chaining',
  ],
  babelrc: false,
};
