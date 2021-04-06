module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'comma-dangle': [1, 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'react/prefer-es6-class': [1, 'always'],
    'react/display-name': [0],
    'react/prop-types': [0],
    'no-bitwise': [0]
  }
};
