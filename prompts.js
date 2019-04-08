/* 置自定义选项: 在初始化插件的时候会作为options传递给generator实例（generator.js或者generator/index.js中的导出函数中的参数）
*   - 本文件要求导出inquirer对象数组: https://github.com/SBoudrias/Inquirer.js#question
*   - 选项即会出现在命令中，也会出现在ui中（添加插件后提示进行相关选项设置）
*   - 可添加额外字段（仅在vue-cli ui界面会显示）
*     - group: 将选项按照章节分组
*     - description: 附加描述
*     - link: More info链接
*   - UI自带的类型（仅仅在UI上有用）：color 取色器
*  */
module.exports = [
  {
    type: 'list',       // 列表类型，在ui中表现为下拉列表
    name: 'testList',
    message: 'Test list inquirer',
    choices: [
      { name: 'value one', value: 'one' },    // name: 会作为该选项的显示信息，value作为脚本内部使用的值
      { name: 'value two', value: 'two' }
    ],
    default: 'one',    // 设置默认选项
  },
  {
    when: answers => answers.testList === 'one',   // 仅当某个选项（本例：testList === 'one'）满足条件时才显示本条选项
    type: 'confirm',    // 确认类型，在ui中表现为单选
    name: 'testConfirm',
    message: 'Test testConfirm inquirer',
    default: false,
  }
]