import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: mode === 'development'
        ? '[local]--[hash:base64:5]'
        : '[name]__[local]___[hash:base64:5]',
    },
  },
}))
