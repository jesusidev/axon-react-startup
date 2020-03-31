const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'autofix',
    'prettier',
    'jsx-a11y',
  ],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'autofix/no-debugger': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-imports': 'off',
    quotes: ['error', 'single'],
    'no-process-env': ['warn'],
    'no-var': ['warn'],
    'func-style': ['error', 'expression'],
    'prefer-arrow-callback': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/await-thenable': ['warn'],
    '@typescript-eslint/no-require-imports': ['warn'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
