const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js' // 程序入口
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出文件目录
        filename: 'bundle.js' // 输出文件
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                //     {
                //     loader: 'style-loader'
                // }, 
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true, // 指定启动 css modules
                        importLoaders: 1,
                        localIdentName: '[path][name]---[local]---[hash:base64:5]' // 指定css的类名格式
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new webpack.HotModuleReplacementPlugin() // 热更新
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost', // 默认是localhost
        port: 3000, // 端口
        open: true, // 自动打开浏览器
        // hot: true // 开启热更新
    }
}