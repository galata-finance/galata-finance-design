import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GalataDesign',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      // Tüm peer deps externalize edilir — bundle'a girmez
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@base-ui/react',
        '@base-ui/react/button',
        '@base-ui/react/dialog',
        '@base-ui/react/input',
        '@base-ui/react/menu',
        '@base-ui/react/merge-props',
        '@base-ui/react/use-render',
        '@base-ui/react/select',
        '@base-ui/react/separator',
        '@base-ui/react/tabs',
        '@base-ui/react/toggle',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react',
        'react-i18next',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // CSS'i ayrı dosyaya çıkar
        assetFileNames: 'styles/[name][extname]',
      },
    },
    cssCodeSplit: false,
  },
});
