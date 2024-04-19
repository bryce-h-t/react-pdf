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
  },
  plugins: [
    'react',
    'import' // Added 'import' to the plugins array
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.stories.*',
        '.storybook/**',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
