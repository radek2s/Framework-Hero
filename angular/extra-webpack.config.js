const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  resolve: {
    extensions: ['', '.js', 'ts', '.jsx', '.css']
  }

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};