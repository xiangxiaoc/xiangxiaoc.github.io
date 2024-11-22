---
date: 2022-01-09
category: gitlab-ci
tag:
  - cicd
---

# 利用 gitlab-ci 的内置变量，自动生成镜像 tag

gitlab-ci 给我们提供了以下内置变量：

- CI_COMMIT_TIMESTAMP： 提交时间戳，格式为：2022-01-09T08:06:04.000Z
- CI_COMMIT_BRANCH： 分支名称
- CI_COMMIT_SHORT_SHA： 提交哈希值

每次跑 CI 流水线时，这些值都是会动态生成的，利用这几个变量，我就有了以下思路：

1. 基于 `CI_COMMIT_TIMESTAMP` 处理得到 20240101-120000 格式的时间戳文本。
2. 再组合 `CI_COMMIT_BRANCH` `CI_COMMIT_SHORT_SHA` 得到 `xxx.com/project/app-xxx:
   dev_12345678_commitAt20240101-120000_buildAt20240101-130000` 完整镜像地址

具体实现的脚本参见下方 `default.before_script` 代码块，每个流水线 job 执行前，会得到 tag 这个变量，后续还可以用给 cd 阶段中的各个
job

```yaml
# 相关变量值，根据实际设置
variables:
   HARBOR_URL: "xxx"
   HARBOR_PROJECT: "xxx"
   IMAGE_NAME: app-xxx
   IMAGE_FULL_NAME: ${HARBOR_URL}/${HARBOR_PROJECT}/${IMAGE_NAME}
   PUSH_CREDS: "123456"

default:
  before_script:
    - export commit_time=$(date -d ${CI_COMMIT_TIMESTAMP} +'%Y%m%d-%H%M%S')
    - export build_time=$(date -d ${CI_PIPELINE_CREATED_AT} +'%Y%m%d-%H%M%S')
    - export tag=${IMAGE_TAG_PREFIX}${CI_COMMIT_BRANCH}_${CI_COMMIT_SHORT_SHA}_commitAt${commit_time}_buildAt${build_time}

.构建镜像:
  stage: CI
  script:
    - tag=${tag}_${DEPLOY_ENV}
    - podman build
      -f .env.${DEPLOY_ENV}.Dockerfile
      --tag ${IMAGE_FULL_NAME}:${tag}
      .
    - podman push --creds ${PUSH_CREDS} ${IMAGE_FULL_NAME}:${tag}
    - echo "镜像构建完成 => ${IMAGE_FULL_NAME}:${tag}"
    - podman image rm ${IMAGE_FULL_NAME}:${tag}

构建sit环境镜像:
  extends: .构建镜像
  only:
    refs:
      - sit
  variables:
    DEPLOY_ENV: sit
  environment:
    name: ${DEPLOY_ENV}
    url: https://sit.xxx.com/ops-platform/

构建prod环境镜像:
  extends: .构建镜像
  only:
    refs:
      - master
  variables:
    DEPLOY_ENV: prod
  environment:
    name: ${DEPLOY_ENV}
    url: https://prod.xxx.com/ops-platform/
```
