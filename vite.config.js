import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 设为 './'：构建产物既可以部署到 GitHub Pages 的子路径，
// 也可以直接用浏览器打开 dist/index.html 本地预览。
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 700
  }
})
