var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env",
              "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-object-rest-spread", "babel-plugin-react-css-modules"]
          }
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/Slider'),
        exclude: /(node_modules|bower_components|build)/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};