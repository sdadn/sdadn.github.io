import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/sdadn.github.io/",
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
})
