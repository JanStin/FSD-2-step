const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


let config = {
    entry : {index: './src/pages/index/main.js', login: './src/pages/login/main.js'},
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: ''
    },

    devServer: {
        overlay: true
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use:
                    [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            fallback: "style-loader",
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },

            {
                test: /\.(img|png|jpe?g|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    publicPath: '../'
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                    publicPath: "../"
                }
            }
            
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, 
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/index/index.pug',
            filename: 'index.html',
            chunks: ['index', 'vendors']
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/login/index.pug',
            filename: 'login.html',
            chunks: ['login', 'vendors']
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
        
    
}

module.exports = config;