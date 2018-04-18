# webpack-react-project
webpack react 工作流搭建

## Running
* npm install
* npm run dev

## 功能
1. css预处理：sass编译
2. js处理：ES6、react编译
3. 公共文件合并分离
4. 文件合并压缩
5. 图片转base64
6. 实时刷新

## 目录结构
```
webpack-react-project/
|
|-- app         //工程文件
|   |-- common          //公共模块
|   |   |-- img
|   |   |-- css
|   |   └-- js
|   |-- config          //公共配置-图片地址、公共文案...
|   |-- test...         //页面模块
|   |   |-- css
|   |   |-- js
|   |   └-- img
|   └-- index.html          //入口文件
└-- build           //打包后文件

```