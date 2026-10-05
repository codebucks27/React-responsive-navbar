import js from '@eslint/js';
import react from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  { ignores: ['build/**', 'coverage/**'] },
  js.configs.recommended,
  {
    files: ['*.js'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    ...react.configs.recommended,
    languageOptions: {
      globals: { ...globals.browser, process: 'readonly' },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...react.configs.recommended.rules,
      '@eslint-react/dom-no-unknown-property': 'error',
    },
  },
  { files: ['src/**/*.{js,jsx}'], ...reactHooks.configs.flat.recommended },
  {
    files: ['src/**/*.test.{js,jsx}', 'src/setupTests.js'],
    languageOptions: { globals: globals.vitest },
  },
];
