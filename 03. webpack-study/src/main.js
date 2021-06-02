// main.js 是项目的 js 入口文件

// 1. 导入 jquery
// import xxx from xxx 是 ES6 中导入模块的方式
// 由于 ES6 的代码较为高级，浏览器解析不了，所以这一行执行报错
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})

// 经过刚才的演示， webpack 可以做哪些事情：
// ❶ webpack 能够处理 js 文件之间的依赖关系：在一个 js 中可以引入另一个 js；
// ❷ webpack 能够处理 js 的兼容问题，将浏览器不识别的高级语法转换为浏览器能正常识别的语法；
// 运行命令： webpack 要打包的文件地址 打包到的文件地址