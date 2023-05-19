import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
const MFBucket = process.env.VITE_BUCKET || "https://radek2s.github.io/Framework-Hero"
export default defineConfig({
  plugins: [
    react(),
    federation({
        name: "shell",
        remotes: {
            reactApp: `${MFBucket}/react/assets/remoteEntry.js`, //http://localhost:5001/assets/remoteEntry.js
            vueApp: `${MFBucket}/vue/assets/remoteEntry.js`, //5002
            angularApp: `${MFBucket}/angular/remoteEntry.js` //4201
        },
        shared: ["react", "react-dom"]
  })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
  }
})
