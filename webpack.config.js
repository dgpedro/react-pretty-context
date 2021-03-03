"use strict"

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, options) => {

    const isDev = options.mode !== 'production';

    return {
        devtool: isDev && "cheap-module-source-map",
        entry: {
            'examples': './docs/src/index'
        },
        output: {
            path: path.join(__dirname, "docs", "dist"),
            filename: isDev ? "[name].js" : "[name].[hash].js",
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            plugins: [new TsconfigPathsPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'docs/src/index.html',
                filename: path.resolve(__dirname, "docs", "index.html"),
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
        devServer: {
            compress: true,
            overlay: true,
            port: 8080,
            contentBase: path.join(__dirname, 'docs'),
            publicPath: "/react-pretty-context/",
            writeToDisk: true,
            historyApiFallback: {
                index: '/index.html'
            },
            open: true,
            openPage: 'react-pretty-context'
        }
    }
}
