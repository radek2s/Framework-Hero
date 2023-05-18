const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Shell",
      remotes: {
        reactApp:"http://localhost:5001/assets/remoteEntry.js"
      },
      // shared: {
      //   "react": {singleton: true},
      //   "react-dom": {singleton: true}
      // }
      // file
        // library: { type: "module" },

        // For remotes (please adjust)
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //   reactApp: {
        //     external: ,
        //     format: 'var'
        //   }
        //     // "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: {
          ...mf.shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'})
        }

        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        //   ...sharedMappings.getDescriptors()
        // })
        
    }),
    sharedMappings.getPlugin()
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
