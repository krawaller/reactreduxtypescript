module.exports = {
  devtool: 'eval',
  entry: __dirname + '/app/src/main',
  output: {
    path: __dirname + '/app/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".tsx",".ts",".js"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
};