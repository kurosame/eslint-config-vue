module.exports = {
  env: {
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }]
  }
}
