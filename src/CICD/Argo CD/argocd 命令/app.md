---
date: 2022-01-09
category: Argo
tag:
  - argocd 命令
---

# app - 核心命令，管理 Argo 应用

## 一、概述

`argocd app`命令是用于管理 Argo CD 中的应用程序的重要工具。它可以实现创建、获取、同步、删除应用等多种操作，帮助用户在 Argo CD
环境中有效地管理应用的部署状态。

## 二、常用操作示例

### （一）创建应用

1. **命令格式**

```bash
argocd app create <app_name> --repo <repository_url> --path <path_in_repo> --dest-server <destination_server> --dest-namespace <destination_namespace>
```

2. **操作步骤**
    - 例如，创建一个名为`my-app`
      的应用，其代码仓库地址为`https://github.com/myorg/my-repo.git`，应用配置在仓库中的路径为`manifests`，目标服务器为`https://kubernetes.default.svc`，目标命名空间为`my-namespace`：

```bash
argocd app create my-app --repo https://github.com/myorg/my-repo.git --path manifests --dest-server https://kubernetes.default.svc --dest-namespace my-namespace
```

### （二）获取应用信息

1. **命令格式**

```bash
argocd app get <app_name>
```

2. **操作步骤**
    - 若要获取名为`my-app`的应用信息，执行：

```bash
argocd app get my-app
```

- 这将显示应用的当前状态、配置信息、同步状态等内容。

### （三）同步应用

1. **命令格式**

```bash
argocd app sync <app_name>
```

2. **操作步骤**
    - 当对应用的配置进行了更新后，可通过以下命令同步`my-app`：

```bash
argocd app sync my-app
```

- 此操作会使 Argo CD 根据新的配置将应用更新到目标环境。

### （四）删除应用

1. **命令格式**

```bash
argocd app delete <app_name>
```

2. **操作步骤**
    - 若要删除`my-app`，执行：

```bash
argocd app delete my-app
```

## 三、注意事项

1. **配置准确性**
    - 在创建应用时，确保`--repo`、`--path`、`--dest-server`和`--dest-namespace`等参数的正确性。错误的参数可能导致应用无法正确部署或同步。
2. **同步前确认**
    - 在执行同步操作之前，建议先查看应用的当前状态和配置变化，以避免意外的结果。特别是在多人协作环境中，可能存在其他人员同时对应用配置进行修改的情况。
3. **删除谨慎操作**
    - 删除应用是不可逆的操作。在执行`argocd app delete`命令之前，要确保该应用确实不再需要，并且已经备份了相关的配置和数据（如果有需要）。
4. **权限要求**
    - 执行`argocd app`的相关操作需要具有相应的权限。如果遇到权限不足的问题，需要联系系统管理员检查和调整权限设置。
