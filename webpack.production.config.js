const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin')

var entryConfig = require('./getConfig').entryConfig()
var htmlOptions = require('./getConfig').htmlOptions


module.exports = {
    entry: entryConfig,           //唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "js/[name].js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./build",     //本地服务器所加载的页面所在的目录
        historyApiFallback: true,   //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        //sass处理
        {
            test: /(\.css|\.scss)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader:'css-loader',
                    options: {
                        minimize: true              //css压缩
                    }
                },{
                    loader:'sass-loader'
                }]
            }),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin(
            ["build"],                  //匹配删除文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        ),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,                     //紧凑输出
            comments: false,                    //删除所有注释
            compress: {
                warnings: false                 //删除没用到的代码不输出警告
            }
        }),
        new ExtractTextPlugin("css/[name].css"),        //合并css
        // new ImageminPlugin({
        //     pngquant: {
        //         quality: '95-100'
        //     }
        // })
    ].concat(htmlOptions)
};