require("babel-runtime/regenerator")
//在 regenerator 之后require webpack-hot-middleware/client
// 该插件为客户端代码热更新插件
require("webpack-hot-middleware/client?reload=true")
// require("./main.css")
// require("./main.sass")
// require("./main.less")
require("./main.styl")
require("./index.html")

// debugger
console.log("hello world!")
// // 异步
// var a = async args => {
//     // 解构
//     const {a, b} = args
//     // 等待
//     await console.log("Hello Future!", a, b);
//     console.log("Done")
// }
// a({a:1, b:2})

