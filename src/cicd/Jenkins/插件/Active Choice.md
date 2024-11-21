---
date: 2022-01-09
category: Jenkins
tag:
  - Jenkins插件
---

# Active Choice - 动态参数

[Jenkins 官网 插件信息](https://plugins.jenkins.io/uno-choice)



+ 需要额外安装
+ 支持自定义 html 元素
+ 勾选高级里的 Omit value field ，不然参数的值的结尾会多一个逗号 ,


## Formatted HTML
+ deploy 为参数化构建显示的名称，也是传给后续步骤的环境变量名
+ input 标签里的 name 属性必须为 "value" ，value 属性才是需要的变量值



以 checkbox 的 input 为例：

![](https://cdn.nlark.com/yuque/0/2022/png/10370900/1642589478868-afe6814b-45db-4f6e-b447-83b27902da9c.png)



![](https://cdn.nlark.com/yuque/0/2022/png/10370900/1642589133932-a07d2d27-1106-4c05-860f-866d3cc04b03.png)

+ ${branch} 的值勾选则为 true 否则为 false
+ 多个复选框，为 true,true 这种格式



Groovy 示例脚本

```groovy
html=
'''
<input type="checkbox" name="value" checked>发布到测试环境
'''

default_html=
'''
<p>该分支不支持直接发布，请在构建完成后提交变更请求单</p>
<a href="http://migujira.cmread.com/secure/CreateIssue!default.jspa" target="_blank" rel="noopener noreferrer">点我提单</a>
'''

if (branch == "devS") {
  return html
} else {
  return default_html
}
```







# 配合 Scriptler 插件
先写两个 groovy Scriptler

```groovy
return ["Select:selected", "DEV", "TEST", "STAGE", "PROD"]
```

```groovy
// Static content examples. These lists can be generated dynamically as an alternative.
List devList   = ["Select:selected", "dev1", "dev2"]
List testList  = ["Select:selected", "test1", "test2", "test3"]
List stageList = ["Select:selected", "stage1"]
List prodList  = ["Select:selected", "prod1", "prod2", "prod3", "prod4"]

List default_item = ["None"]

if (Environment == 'DEV') {
  return devList
} else if (Environment == 'TEST') {
  return testList
} else if (Environment == 'STAGE') {
  return stageList
} else if (Environment == 'PROD') {
  return prodList
} else {
  return default_item
}
```

```groovy
properties([
  parameters([
    [
      $class: 'ChoiceParameter',
      choiceType: 'PT_SINGLE_SELECT',
      name: 'Environment',
      script: [
        $class: 'ScriptlerScript',
        scriptlerScriptId:'Environments.groovy'
      ]
    ],
    [
      $class: 'CascadeChoiceParameter',
      choiceType: 'PT_SINGLE_SELECT',
      name: 'Host',
      referencedParameters: 'Environment',
      script: [
        $class: 'ScriptlerScript',
        scriptlerScriptId:'HostsInEnv.groovy',
        parameters: [
          [name:'Environment', value: '$Environment']
        ]
      ]
   ]
 ])
])

pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "${params.Environment}"
        echo "${params.Host}"
      }
    }
  }
}
```

