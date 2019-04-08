module.exports = api => {
  // 添加项目配置
  api.describeConfig({
    // 插件唯一ID, 要求在所有vue插件中唯一，命名规则建议: https://en.wikipedia.org/wiki/Reverse_domain_name_notation
    id: 'com.lesssn.vue-cli-plugin-tutorial',
    // 项目配置的名称
    name: 'Demo configuration',
    // 项目配置描述信息
    description: 'demo plugin configuration',
    // 更多信息（More info）链接的地址
    link: 'https://github.com/lesssn/vue-cli-plugin-tutorial',
    // 项目配置的图标
    icon: 'application_settings',
    // 必选：配置项目配置选项，与prompts.js的规则相同
    onRead: ({ data, cwd }) => ({
      prompts: [
        // 提示符对象
      ]
    }),
    // 必选: 使用 onWrite钩子将数据写入配置文件 (或者执行任何 Node.js 代码)
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {
      // prompts: 当前提示符们的运行时对象
      // answers: 来自用户输入的回答数据
      // data: 从配置文件读取的只读的初始化数据
      // files: 被找到的文件的描述器 ({ type: 'json', path: '...' })
      // cwd: 当前工作目录
      // api: onWrite API
    }
  })

  // 配置任务(扩展package.json中已经存在的任务)
  api.describeTask({
    match: /vue-cli-service electron:build/,
    description: 'Build test',
    link: 'https://github.com/lesssn/vue-cli-plugin-tutorial',
    icon: 'application_settings',
    // 任务运行前钩子: 主要用来修改运行参数
    onBeforeRun: async ({ answers, args }) => {

    },
    // 任务运行后钩子：在任务启动后立即执行
    onRun: async({args, child, cwd}) => {
      // args：参数
      // child：Node子进程
      // cwd：进程所在目录
    },
    // 任务退出后执行：
    onExit: async({args, child, cwd, code, signal}) => {
      // code: 退出码
      // signal: 可能的杀死进程的信号
    }
  })

  // 新增任务（只存在于vue-cli ui中）
  api.addTask({
    // 必填选项: name、command
    name: 'addTask',
    command: 'vue-cli-service addTask'    // command会运行Node上下文，如可以调用Node的bin命令
    // 可选选项: 与describeTask选项相同，除了没有match选项
  })
}