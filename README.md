# typescript-study

typescript 学习工程，不依赖框架，用 webpack 搭建可以直接运行ts的极简环境，包含了学习官方文档的全部示例。

项目目录解读：

    ${typescript-study}
    ├── build 构建和启动开发环境
    └── src   源码
        ├── main.js   入口文件
        └── ts-demo   ts demo 源码

demo 源码和 ts 官方文档一一对应。

启动命令: `npm run dev`。

我们大体的学习路径是这样：

 - 1、先用 webpack 配置一个简单的工程，这个工程能实时编译 ts 到 js；
 - 2、从官网上学习语法，在上面工程中编写 Demo 加深理解；
 - 3、结合框架和场景(vue\react\小程序\electron)学习 ts 应用。
