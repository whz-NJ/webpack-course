const path = require("path")
import webpack from 'webpack';
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        // 入口：有并且可以有多个
        // main: ["babel-polyfill","./src/main.js"]
        main: ["core-js/fn/promise","./src/main.js"]
    },
    // 打包环境：开发 & 生产
    mode: "development",
    //出口：有且只能有一个
    output:{
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    //本地服务器
    devServer: {
        contentBase: "dist",
        // 热更新
        hot: true,
        //overlay: true
    },
    // 本地调试工具
    devtool: "source-map",
    module: {
        // css loaders
        rules:[
            // js loaders
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
            {
                // css loaders
                test:/\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                // html loaders
                test:/\.html$/,
                use: [
                    // {
                    //     // 给当前加载的文件重命名
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "[name].html"
                    //     }
                    // },
                    // {
                    //     // 将index.html和bundle.js文件分离，不会将html合并到bundle.js文件
                    //     loader: "extract-loader"
                    // },

                    {
                        // 调用extract-loader和file-loader
                        loader: "html-loader",
                        options: {
                            // img标签的src属性
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                // img loaders
                test:/\.(jpg|gif|png)$/,
                use: [
                    {
                        // 给当前加载的文件重命名
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
