require("babel-runtime/regenerator")
require("babel-register")
//在 regenerator 之后require webpack-hot-middleware/client
// 该插件为客户端代码热更新插件
require("webpack-hot-middleware/client?reload=true")
require("./main.css")
require("./index.html")
require("./app")
// debugger
