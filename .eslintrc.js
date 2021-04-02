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
    'prettier/prettier': 'error',
    'comma-dangle': [0],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true }
    ],
    'react/prefer-es6-class': [1, 'always'],
    'react/display-name': [1],
    'react/prop-types': [0]
  }
};
