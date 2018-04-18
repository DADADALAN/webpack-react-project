const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')
const path = require('path');

var files = fs.readdirSync("app")

//入口文件
var entryConfig = function(){
    var outputConfig = {}
    files.forEach((file) => {
        if(!fs.existsSync("app/" + file + "/js/main.jsx")) return false
        outputConfig[file] = __dirname + "/app/" + file + "/js/main.jsx"
    })
    return outputConfig
}

//生成html
var getHtmlPaths = function(){
    var htmlArr = []
    files.forEach((file) => {
        if(!fs.existsSync("app/" + file + "/js/main.jsx")) return false
        var html = {}
        html.path = __dirname + "/app/" + file + "/" + file + ".html"
        html.name = file + ".html"
        htmlArr.push(html)
    })
    return htmlArr
}
var htmlPaths = getHtmlPaths()
var htmlOptions = htmlPaths.map((html) => {
    return new HtmlWebpackPlugin({
        template: html.path, 
        filename: html.name, 
        inject: false               //所有资源文件打包到html中
    })
})

//路径处理
var resolveConfig = {
    extensions: ['.js', '.json', '.scss', '.jsx'],              //后缀名自动补全
    alias: {
        css: path.join(__dirname + "/app/common/css"),
        img: path.join(__dirname + "/app/common/img"),
        js: path.join(__dirname + "/app/common/js"),
        component: path.join(__dirname + "/app/component")
    }
}



module.exports = {
    entryConfig: entryConfig,
    htmlOptions: htmlOptions,
    htmlPaths: htmlPaths,
    resolveConfig: resolveConfig
}