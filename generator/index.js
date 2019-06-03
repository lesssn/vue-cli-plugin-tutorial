/* 主要用来生成（拷贝）文件以及设置vue项目package.json选项 */

/* 该文件要求导出一个函数
* 参数：
*   - api: generatorAPI实例: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js
*   - options: 这个插件的generator选项, prompts.js中定义的参数会传递给本参数 TODO: 具体含义还不明确
*   - rootOptions: preset (presets.foo) 将会作为第三个参数传入, TODO: 具体含义不明确
* */
module.exports = (api, options, rootOptions) => {
  // 渲染文件，<目标文件> <> 可用于拷贝文件（也可以添加额外的数据渲染文件）, 渲染使用ejs进行渲染
  api.render({
    './src/vue-cli-demo.js': './templates/src/main.js',
    './src/plugins/demo.js': './templates/src/demo.js'
  })
  // api.render('./template')   // 复制./template下的所有文件，并使用ejs进行渲染

  // 注入import: <待注入文件> <import语句>。往往用于在main.js中导入滋生的脚本
  api.injectImports('./src/main.js', `import './plugins/demo.js'`)

  // 扩展项目的package.json文件
  api.extendPackage({
    scripts: {
      'test': 'vue-cli-service test',
    },
    devDependencies: {},
    main: './src/vue-cli-demo.js',
  })
}