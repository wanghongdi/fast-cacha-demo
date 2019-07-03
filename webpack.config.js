module.exports = {
    // 模式
    // mode: 'development',//bundle.js中的文件不会被压缩  会有三个值"development" | "production" | "none"  production为压缩 其他为不压缩

    mode: 'production',
    entry: {
        // 入口文件
        app: './src/index.js'
    },
    // 开发服务器，能实时重新加载
    // devServer: {
    //     contentBase: './dist',
    //     // 开启模块热替换
    //     hot: true,
    //     host: HOST,
    //     port: PORT
    // },
    // plugins: [
    //     // 每次构建前清理dist文件夹
    //     new CleanWebpackPlugin(['dist']),
    //     // html-webpack-plugin插件默认生成index.html文件
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management'
    //     }),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    output: {
        // 所有输出文件的目标路径，必须是绝对路径
        // path: path.resolve(__dirname, 'dist'),
        path: __dirname,
        // 输出文件名
        // filename: '[name].bundle.js'
        filename: './release/bundle.js'
    },
    module: {
        rules: [
            // 使用babel-loader在webpack打包时处理js文件
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                // include: [path.resolve(__dirname, 'src')]
            }
        ]
    }
}