/* service插件部分，每次vue-cli-service命令调用时执行；该文件目的主要是根据不同的环境修改webpack配置，并向vue-cli-service注入额外的命令 */

const { info } = require('@vue/cli-shared-utils')

/*
  参数：
  - api: https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/PluginAPI.js
  - projectOptions: vue.config.js或者package.json中vue选项
*/
module.exports = (api, projectOptions) => {
  // 插件配置存放位置，以及获取方式
  const pluginOptions = projectOptions.pluginOptions.myPluginOptions

  // 注册一个运行命令
  api.registerCommand(
    'custom-command',
    {
      description: 'Test register custom command',
      usage: 'vue-cli-service custom-command [options]',
      options: {
        '--test': `Just to demo not do something`,
      }
    },
    (args, rawArgs) => {
      // 通过resolveWebpackConfig获取解析好的webpack配置，每次调用都会生成独立配置，可用来根据不同的运行环境修改webpack的配置
      // 类似的还有resolveChainableWebpackConfig，用来获取链式配置
      const configA = api.resolveWebpackConfig()
    }
  )

  // 配置webpack的配置选项
  api.configureWebpack(config => {
    // 根据是开发环境还是发布环境设置不同的发布路径
    config.output.publicPath = process.env.NODE_ENV === 'development' ? '/' : './'
  })
}

// 设置插件命令需要运行在那个模式下
module.exports.defaultModes = {
  'custom-command': 'development'
}
