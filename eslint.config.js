import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default defineConfig(
  { ignores: ['dist/', '.astro/', '.vercel/', 'node_modules/'] },
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'array-callback-return': 'error',
      camelcase: ['error', { properties: 'never' }],
      curly: ['error', 'all'],
      'prefer-template': 'error',
      'no-useless-escape': 'error',
      // autofocus is only used inside <dialog>, where the HTML spec
      // recommends it to set initial focus.
      'astro/jsx-a11y/no-autofocus': 'off',
    },
  },
  prettier
)
