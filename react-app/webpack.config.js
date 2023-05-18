// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import federation from "@originjs/vite-plugin-federation";


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "react-app",
//       // for
//       filename: "remoteEntry.js",
//       remoteType: 'module',
//       exposes: {
//         "./web-components": "./src/ReactApp",
//       },
//       // shared: ["react", "react-dom"],

      
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: "esnext",
//     minify: true,
//     cssCodeSplit: false,
    
//   }
// })

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
  return {
    entry: './src/ReactApp.js',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      publicPath: "auto",
      uniqueName: "ramfe"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: './index.html'

      // }),
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "react",
          library: { type: "var", name: "react" },
          filename: "remoteEntry.js", // <-- Meta Data
          exposes: {
              './web-components': './src/ReactApp.js',
          },        
          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],
    devServer: {
      port: 5001
    }
  }
}