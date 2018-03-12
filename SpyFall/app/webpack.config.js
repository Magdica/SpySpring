var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: {
    main: './src/index.jsx'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: function (module) {
            return module.context
              && module.context.indexOf('node_modules') !== -1;
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest'
        })
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            loaders:[
              'style-loader',
              'css-loader?modules&localIdentName=[local]__in_[name]--[hash:base64:8]'
            ]
          },
          {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loaders: {
              loader: 'babel-loader',
              options:{
                presets: ['react']
              }
            }
          }
        ]
      }
};