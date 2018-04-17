const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ImageminPlugin = require("imagemin-webpack-plugin").default
const CopyWebpackPlugin = require('copy-webpack-plugin')

var entryConfig = require('./getConfig').entryConfig()
var htmlOptions = require('./getConfig').htmlOptions
var resolveConfig = require('./getConfig').resolveConfig


module.exports = {
    entry: entryConfig,           //入口文件
    output: {
        path: __dirname + "/build",
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
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
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new CleanWebpackPlugin(
            ["build"],                  //匹配删除文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({ name: 'venders', filename: 'js/venders.js' }),          //合并公共文件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),           //排序输出，减小文件大小
        new webpack.optimize.UglifyJsPlugin({                       //js压缩
            beautify: false,                     //紧凑输出
            comments: false,                    //删除所有注释
            compress: {
                warnings: false                 //删除没用到的代码不输出警告
            }
        }),
        new ExtractTextPlugin("css/[name].css")                //分离css
    ].concat(htmlOptions),
    resolve: resolveConfig
};