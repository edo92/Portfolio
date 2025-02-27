import nx from '@nx/eslint-plugin';
import css from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwindSyntax,
    },
    rules: {
      'css/no-empty-blocks': 'error',
    },
  },
];
