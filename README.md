# vue-cli-plugin-tutorial
> vue-cli 3.x的项目演示教程，尽量在源码中提供详尽的注释方便快速掌握vue-cli脚本的开发方法

TODO
- [x] ejs
- [x] 客户端插件
- [x] 自定义视图
- [x] 共享数据
- [x] 本地存储
- [x] 通知


- 插件命名: vue-cli-plugin-<name>，必须使用该格式才能被@vue/cli-service发现以及vue add <name>的的时候安装
- package.json: 本插件的描述文件
- index.js: 主要设置自定义命令
- logo.png: (可选)插件图标，要求不透明的正方形图，建议大小84x84
- prompts.js: (可选)插件的相关选项
- generator: (可选)
    - index.js: 文件拷贝，自定义package.json等
    - templates: 自定的目录（可自行取其他名称），主要用来存储后续会进行复制或者渲染的图片，渲染会使用[ejs](https://github.com/mde/ejs)进行渲染
        - 如果你想要渲染一个以点开头的模板文件 (例如 .env)，则需要使用`_`来替代点，因为因为以点开头的文件会在插件发布到 npm 的时候被忽略
        - 如果需要渲染`_`开头的模板文件，那么需要使用两个下划线`__`