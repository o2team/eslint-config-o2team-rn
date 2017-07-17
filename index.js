module.exports = {
  extends: [
    'eslint-config-o2team',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
}
