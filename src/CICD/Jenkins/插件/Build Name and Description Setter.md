---
date: 2022-01-09
category: Jenkins
tag:
  - Jenkins插件
---

# Build Name and Description Setter - 修改 Build 的名称和描述

[Jenkins 官网 插件信息](https://plugins.jenkins.io/build-name-setter/)

Pipeline 示例
```groovy
stages {
    stage("Debug") {
        steps {
            buildDescription("构建分支：" + params.BRANCH + " 构建人：${BUILD_USER}")
        }
    }
}
```
