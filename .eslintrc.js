module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off', // react-native의 style과 react의 style 설정이 충돌나서? off 함
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/function-component-definition': ['off', { namedComponents: ['arrow-function', 'function-declaration'] }],
    'react-native/no-inline-styles': 'off',
    'no-alert': 'off',
    'no-unused-vars': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        allowExistingDirectories: true,
      },
    },
    'import/core-modules': ['@expo/vector-icons'],
  },
};
