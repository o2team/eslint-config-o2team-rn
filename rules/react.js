module.exports = {
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'new-cap': 2,
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'no-var': 2,
    'indent': [
      'error',
      2
    ],
    'no-console': 1,
    'no-unused-vars': 2,
    'no-inner-declarations': 2,
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        'requireReturnForObjectLiteral': true
      }
    ],
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'react/display-name': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-render-return-value': 2,
    'react/require-render-return': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
  }
}
