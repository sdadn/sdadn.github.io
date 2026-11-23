import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import fs from 'node:fs'
import yaml from 'yaml';
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "/",
  build: {
    outDir: 'dist'
  },
  plugins: [
    vue(),
    {
      name: "yaml-plugin",
      load(id, options) {
        if(id.endsWith(".yml") || id.endsWith(".yaml")) {

          const parsedYml = yaml.parse(fs.readFileSync(id, 'utf8'));

          return {
            code: `export default ${JSON.stringify(parsedYml)};`
          }
        }
      }
    }
  ],
  resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@data': fileURLToPath(new URL('./data', import.meta.url))
    }
  },
  server:{
    port: 8080
  }
})
