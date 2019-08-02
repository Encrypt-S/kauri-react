module.exports = {
  resolve: {
    extensions: ['.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        }],
      },
    ],
  },
}