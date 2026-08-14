import nextConfig from 'eslint-config-next'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'

const config = [
  { ignores: ['.next', 'node_modules', 'TheFoss.com Design System/**'] },
  ...nextConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
