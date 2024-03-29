import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react-app",
      filename: "remoteEntry.js",
      remoteType: 'module',
      exposes: {
        "./ReactApp": "./src/bootstrapNew",
      },
      // shared: ["react", "react-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  }
})