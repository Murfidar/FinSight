import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: [
      'node_modules/**',
      '.next/**',
      'public/',
      'dist/',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [resolve(__dirname, './tsconfig.json')]
      },
      globals: {
        browser: true,
        node: true
      }
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      // General rules
      semi: 'off',
      'no-undef': 'warn',
      'no-unused-vars': 'warn',

      // React hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import rules
      'import/order': 'warn',
      'import/no-unresolved': 'warn',
      'import/named': 'warn',
      'import/default': 'warn',
      'import/export': 'warn',
      'import/no-duplicates': 'warn',

      // Prettier
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto'
        }
      ],

      // Next.js
      '@next/next/no-img-element': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]

export default eslintConfig
