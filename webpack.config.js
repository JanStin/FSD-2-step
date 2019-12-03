const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    // точка входа

    entry: './src/index.js',

    // Точка выхода (и другие настройки еще не совсем разобрался)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ""
    },

    // config web-dev-server
    devServer: {
        overlay: true
    },


    // Подключенные доп модули webpack
    module: {
        rules: [
            //babel перегоняет новый код в старый для поддержки старыми браузерами
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            //Данный модуль позволяет импортировать css в js

            // Последовательность подключения loader справа на лево
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
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },

    // Подключаемые плагины
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),

        new HtmlWebpackPlugin({
            template: "./src/test.pug"
        }),

    ]

};

module.exports = config;