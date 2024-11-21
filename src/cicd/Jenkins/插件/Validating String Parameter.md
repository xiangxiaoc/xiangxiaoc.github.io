---
date: 2022-01-09
category: Jenkins
tag:
  - Jenkins插件
---

# Validating String Parameter - 参数校验

[Jenkins 官网 插件信息](https://plugins.jenkins.io/validating-string-parameter/)

## Pipeline 示例

```groovy
pipeline {
    agent any

    parameters {
        validatingString(
            name: 'param1', 
            defaultValue: '', 
            regex: /^[0-9]+$/, 
            failedValidationMessage: '', 
            description: 'Numbers only parameter example'
        )
    }

    stages {
        stage("Check") {
            steps {
                echo "${params.param1}"
            }
        }
    }
}
```
