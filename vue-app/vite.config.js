import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
const path = require("path");

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: "vue-app",
            filename: 'remoteEntry.js',
            remoteType: 'module',
            exposes: {
                "./vue-components": "./src/main.ts"
            }
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: true,
        cssCodeSplit: false,
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})