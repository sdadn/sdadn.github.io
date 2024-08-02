import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // base: "/" - using default value for GitHub
  plugins: [vue()],
})
