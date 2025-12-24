import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import externalGlobals from 'rollup-plugin-external-globals';


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      vue(),
      tailwindcss()
    ],
    base: "/pages/code-converter",
    build: {
      outDir: '../../pages/code-converter',
      emptyOutDir: true, // 强制清空 outDir（即使不在根目录）
      // rolldownOptions: {
      //   plugins: [
      //     isProd && externalGlobals({
      //       vue: 'Vue',
      //       axios: 'axios'
      //     })
      //   ].filter(Boolean)
      // },
    },
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      }
    },
    html:{
    
    }
  }
})
