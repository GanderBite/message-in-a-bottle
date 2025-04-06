// @ts-check

import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  globalIgnores(['.react-router/', 'node_modules', 'build', 'public']),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['./app/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ...reactPlugin.configs.recommended.parserOptions,
        ...reactPlugin.configs['jsx-runtime'].parserOptions,
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs['recommended-latest'].rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  perfectionist.configs['recommended-natural'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
    },
  },
);
