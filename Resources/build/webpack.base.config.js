const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { resolve } = require('path');
const buildDirectory = resolve(__dirname, '../../../../../../../public/build');

module.exports = {
    name: 'shopware-next-storefront',
    entry: './src/main.js',
    output: {
        path: buildDirectory,
        filename: 'main.bundle.js',
        publicPath: 'http://shopware-development.saas:8080/'
    },
    devtool: 'inline-cheap-source-map',
    stats: {
        colors: true
    },
    performance: {
        hints: false
    },
    cache: true,
    target: 'web',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }, {
                    loader: 'eslint-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackBar({
            name: 'Shopware Next Storefront'
        }),
        new StyleLintPlugin()
    ]
};