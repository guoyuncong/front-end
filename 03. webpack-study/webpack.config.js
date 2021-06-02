const path = require('path')

// 这个配置文件其实就是一个 js 文件，通过 node 的模块操作向外暴露了一个配置对象

module.exports = {
    // 指定 入口 和 出口
    // 入口：表示要使用 webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 出口：输出文件相关的配置，指定打包好的文件，输出到哪个目录中
    output: {
        path: path.join(__dirname, './dist'),
        // 指定输出文件的名称
        filename: 'bundle.js'
    }
}

// 当我们在控制台中输入 webpack 命令，weboack 执行了：
// 1. webpack 发现我们并没有通过命令的形式指定入口和出口
// 2. webpack 就回去项目的根目录查找配置文件 webpack.config.js 
// 3. webpack 解析 webpack.config.js 配置文件，得到配置文件中导出的配置对象，拿到了指定的入口和出口
// 4. 打包构建
