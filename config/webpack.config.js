const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['.'] },
      plugins: ['bs-fullscreen-message'],
      files: [
        './index.html',
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
