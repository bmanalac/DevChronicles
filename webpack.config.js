const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// resolvePath files
const path_prod = path.resolve(__dirname, 'dist');

// Plugin(s) variables
const extractTextPlugin = new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true});

const config = {
    entry: './src/index.js',
    output: {
        path: path_prod,
        filename: 'bundle.js'
        // publicPath: '/dist'
    },
    devServer: {
        contentBase: 'src/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-2']
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.html$/,
                use: ['html-loader']
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
    plugins: [
        extractTextPlugin,
        new OptimizeAssetsPlugin(),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({'React': 'react'}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;
