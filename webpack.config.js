const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var entryConfig = require('./getConfig').entryConfig()
var htmlOptions = require('./getConfig').htmlOptions
var htmlPaths = require('./getConfig').htmlPaths
var resolveConfig = require('./getConfig').resolveConfig

module.exports = {

    entry: entryConfig,  //入口文件
    output: {
        path: __dirname + "/build",  //打包后的文件存放的地方
        filename: "js/[name].js"  //打包后输出文件的文件名
    },

    devtool: 'eval-source-map',  //生成Source Maps（使调试更容易）

    devServer: {  //构建本地服务器
        contentBase: "./build",  //本地服务器所加载的页面所在的目录
        historyApiFallback: true,  //不跳转
        inline: true,  //实时刷新
        hot: true
    },

    module: {  //Loaders
        rules: [
            //js、jsx处理
            {
                test: /(\.jsx|\.js)$/,  //用以匹配loaders所处理文件的拓展名的正则表达式（必须）
                use:[{
                    loader: "babel-loader?cacheDirectory=true"  //loader的名称（必须）
                }],
                exclude: /node_modules/  //include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
            },
            //sass处理
            {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            //图片压缩
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),          //修改后自动刷新
        new ExtractTextPlugin("css/[name].css"),           //分离css和js文件
        new webpack.optimize.CommonsChunkPlugin({ name: 'venders', filename: 'js/venders.js' }),          //合并公共文件
        new HtmlWebpackPlugin({                            //依据模版生成新的html
            template: __dirname + "/app/index.html",
            inject: false,
            links: htmlPaths
        })
    ].concat(htmlOptions),
    resolve: resolveConfig
};