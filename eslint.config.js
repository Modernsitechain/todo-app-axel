// @ts-nocheck
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const unusedImports = require('eslint-plugin-unused-imports');
module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended
    ],
    plugins: {
      'unused-imports': unusedImports
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/array-type': 'off', // Turn off the array type rule
      '@typescript-eslint/no-explicit-any': 'off', // Turn off the any type warning
      '@typescript-eslint/no-unused-expressions': 'off', // Disable no-unused-expressions rule
      '@angular-eslint/no-output-on-prefix': 'off', // Disable no-output-on-prefix rule
      '@typescript-eslint/class-literal-property-style': 'off', // Add class literal property style rule
      '@angular-eslint/no-output-native': 'off', // Disable no-output-native rule
      '@typescript-eslint/no-empty-function': 'off', // Disable no-empty-function rule
      '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['app', 'we-mind'],
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'we-mind'],
          style: 'kebab-case'
        }
      ],
      'no-useless-escape': 'off' // Turn off the useless escape rule
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      '@angular-eslint/template/label-has-associated-control': 'off', // Disable label-has-associated-control rule
      '@angular-eslint/template/alt-text': 'off' // Disable alt-text rule
    }
  }
);
