# vue-cli-plugin-tutorial
> vue-cli 3.x的项目演示教程，尽量在源码中提供详尽的注释方便快速掌握vue-cli脚本的开发方法

TODO
- [x] 详细的describeConfig
- [x] ejs
- [x] 客户端插件
- [x] 自定义视图
- [x] 共享数据
- [x] 本地存储
- [x] 通知

## 基本教程
### 最简版本
> vue-cli 3.x插件必要文件, 除此之外的文件都是可选的
```bash
|- index.js         # 定义自定义命令
|- package.json     # 插件描述文件（与vue项目的package.json无关）
```
- 注意插件名称（package.json中的name字段）必须以`vue-cli-plugin-`开头，只有这样才能被@vue/cli-service发现以及添加

### 添加LOGO
> 直接在根目录添加logo.png文件即可, 不需要其他特别的设置
```bash
|- index.js         
|- package.json     
|- logo.png         # (可选)插件图标，要求不透明的正方形图，建议大小84x84
```

### 增加询问条件
> 通过在根目录添加prompts.js文件用来在插件安装时提供选项进行个性化设置
```bash
|- index.js         
|- package.json     
|- logo.png         
|- prompts.js       # (可选)设置选项, 其值会传递给generator
```

### 个性化设置以及文件拷贝
> 插件往往会对项目添加依赖，这个时候就涉及到需要修改项目的package.json文件，需要通过generator.js(或者generator/index.js)来操作。
```bash
|- generator            # 也可以根目录下直接定义 generator.js与generator/index.js文件的功能相同
    |- index.js         # (可选) 主要用来根据用户设置的选项(prompts.js)来设置vue项目的package.json以及渲染项目模板文件
|- index.js            
|- package.json     
|- logo.png         
|- prompts.js           
```
- 使用`api.render`渲染项目模板文件, 也可用来直接拷贝文件
- 模板渲染使用的是[ejs](https://github.com/mde/ejs)引擎
- 如果你想要渲染一个以点开头的模板文件 (例如 .env)，则需要使用`_`来替代点，因为因为以点开头的文件会在插件发布到npm的时候被忽略
- 如果需要渲染`_`开头的模板文件，那么需要使用两个下划线`__`