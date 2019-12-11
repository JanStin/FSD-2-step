const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets',
    img: '../../img',
    fonts: '../../fonts',
    theme: '/theme/'
};
const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('pug'));
let chunks = (vendor, myName) => [vendor, myName];


let config = {
    // Точки входа
    entry: {
        index: `${PATHS.src}/index.js`,
        login: `${PATHS.src}/login.js`,
        register: `${PATHS.src}/register.js`,
    },

    // На выходе [name] - имя точки входа
    output: {
        filename: `${PATHS.assets}/js/[name].[hash].js`,
        path: path.resolve(__dirname, '../dist'),
        publicPath: ''
    },

    resolve: {
        alias: {
            '~':'src'
        }
    },

    externals: {
        paths: PATHS
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {path: './postcss.config.js'}
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                `${PATHS.src}${PATHS.theme}variables.scss`,
                                `${PATHS.src}${PATHS.theme}mixins.scss`,
                             
                                // `${PATHS.src}${PATHS.theme}fonts.scss`,
                            ],
                        }
                    }
                ]

            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(img|jpe?g|gif|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: `[name].[ext]`,
                    publicPath: `${PATHS.img}`,
                    outputPath: `/img/`
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: `${PATHS.fonts}`,
                    outputPath: `/fonts/`
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].[contenthash].css`,
            chunkFilename: '[id].css',
            // ignoreOrder: false,
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/components`, to: `img`,
                ignore: ['*js' , '*scss', '*pug', '*sass' ],
                flatten:true
            }
        ]),
        new CopyWebpackPlugin([
            {

                from: `${PATHS.src}/theme/fonts`, to: `fonts`,
                flatten:true
            }
        ]),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
            chunks: ['vendors', `${page.replace(/\.pug/, '')}`],

        }))

    ]
};


module.exports = config;