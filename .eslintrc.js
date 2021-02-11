module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false,
      },
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {
        'colon': {
          'before': false,
          'after': true,
        },
      },
    }],
    'unused-imports/no-unused-imports': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', {
      'js': 'always',
      'ts': 'always',
    }],
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-sparse-arrays': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'array': true,
        'object': true,
      },
      'AssignmentExpression': {
        'array': false,
        'object': false,
      }
    }, {
      'enforceForRenamedProperties': false,
    }],
    'semi': [2, 'never'],
    'yoda': 'off',
  },
}
