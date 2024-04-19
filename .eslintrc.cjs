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
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false, // Added back to avoid ESLint expecting config files to be processed asynchronously
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.stories.*',
        '.storybook/**',
        'packages/**/tests/**/*.js',
        'packages/**/src/**/*.js',
        'packages/**/src/**/*.jsx',
        'packages/examples/src/resume/*.stories.tsx',
        'packages/**/rollup.config.js',
        'packages/**/src/**/*.js',
        'packages/**/src/**/*.jsx',
        'packages/**/vitest.*.js',
        'packages/**/src/**/*.test.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-use-before-define': 'off',
      },
    },
    {
      files: [
        '**/*.config.js',
        '**/*.setup.js',
        '**/*.test.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-use-before-define': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'no-unexpected-multiline': 'off',
        'no-async-promise-executor': 'off',
      },
    },
  ],
};
