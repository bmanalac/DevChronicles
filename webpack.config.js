const path = require( 'path' )
const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )

// resolvePath files
const path_prod = path.resolve( __dirname, 'dist' )

const config = {
  entry: './src/index.js',
  output: {
    path: path_prod,
    filename: 'bundle.js'
    // publicPath: '/dist'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env', {
                    targets: [ '> 4%', 'ie 11', 'safari >= 7' ]
                  }
                ],
                'stage-2',
                'react'
              ]
            }
          }
        ]
      }, {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }, {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true, // this enables hot reload
    inline: true, // use inline method for hmr
    overlay: false, // display errors as browser-overlay
    quiet: false,
    // host: 'app.dev',
    port: 8080,
    contentBase: path.join( __dirname, 'src' ),
    // watchContentBase: true, // HMR is not working with true
    watchOptions: {
      poll: false, // needed for homestead/vagrant setup, review
    }
  },
  plugins: [
    // enable HMR globaly
    new webpack.HotModuleReplacementPlugin( ),
    // prints readable modules to the browser
    new webpack.NamedModulesPlugin( ),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin([ 'dist' ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV || 'development' )
    })
  ]
}

module.exports = config
