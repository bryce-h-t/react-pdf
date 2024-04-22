module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    babelOptions: {
      configFile: "./babel.config.js",
    },
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.stories.tsx', '**/*.stories.js', '**/*.stories.jsx', '**/*.stories.ts']}],
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./'],
      },
      webpack: {
        config: './.storybook/main.js',
      },
    },
  },
  ignorePatterns: [
    '**/*.config.js',
    '**/*.config.cjs',
    '**/*.config.mjs',
    '**/babel.config.js',
    '**/jest.config.js',
    '**/rollup.config.js',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    'packages/**/*.js',
  ],
};
