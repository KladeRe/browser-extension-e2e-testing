import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        chrome: 'readonly', // For Chrome extension APIs
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Specific rules for test files
    files: ['**/*.spec.ts', '**/*.test.ts', '**/tests/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];

export default eslintConfig;
