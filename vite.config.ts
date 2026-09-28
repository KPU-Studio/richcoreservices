import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss()],
      publicDir: 'public',
      define: {
        'process.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(env.VITE_WEB3FORMS_ACCESS_KEY),
        'process.env.VITE_HCAPTCHA_SITE_KEY': JSON.stringify(env.VITE_HCAPTCHA_SITE_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable source maps for production debugging (optional)
        sourcemap: false,
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Minify for production
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true
          }
        }
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react']
      }
    };
});
