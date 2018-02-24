const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

var extractLESS = new ExtractTextPlugin({
    filename: "./css/[name].css"
});

var indexHTML = new HtmlWebpackPlugin({
    template: "./src/index.html",
    title: "AVA"
});

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist/")
    },
    devServer: {
        contentBase: "./dist",
        stats: "errors-only"
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: extractLESS.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    "file-loader?name=[name].[ext]&outputPath=./img/&publicPath=../",
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "/fonts/",
                        publicPath: "../fonts/"
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        //new cleanWebpackPlugin(["dist"]),
        indexHTML,
        extractLESS,
        new webpack.ProvidePlugin({
            jQuery: 'jquery', // bootstrap 3.x requires
        })
    ]
}