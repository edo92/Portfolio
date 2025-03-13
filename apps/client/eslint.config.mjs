import { dirname } from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import baseConfig from '../../eslint.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

const config = [
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  ...fixupConfigRules(compat.extends('plugin:tailwindcss/recommended')),

  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'cva', 'cn', 'className'],
        config: './tailwind.config.js',
      },
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];

export default config;
