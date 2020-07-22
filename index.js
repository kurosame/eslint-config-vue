module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: ['jest', 'cypress'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    camelcase: ['error', { properties: 'never' }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['stories/**', 'test/**'] }
    ]
  }
}
