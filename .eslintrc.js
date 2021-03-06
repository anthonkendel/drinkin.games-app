module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-closing-bracket-newline': [
      'warning',
      {
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
  },
};
