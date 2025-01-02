---
date: 2022-01-09
category: Argo
tag:
   - argocd 命令
---

# cluster - 管理多 K8s 集群

# Argo CD cluster 命令文档

## 一、概述
`argocd cluster` 命令用于管理 Argo CD 中的集群相关信息，包括添加、列出、获取、删除集群配置等操作，在处理多集群环境下的应用部署时非常关键。

## 二、常用操作示例

### （一）添加集群
1. **命令格式**
```bash
argocd cluster add <cluster_name> --server <cluster_server_url> [--insecure-skip-server-verification] [--grpc-web-root-path <path>] [--config <config_file_path>]
```
2. **操作步骤**
   - 例如，要添加一个名为 `my-cluster`，服务器地址为 `https://my-kubernetes-cluster.com` 的集群：
```bash
argocd cluster add my-cluster --server https://my-kubernetes-cluster.com
```
- 如果集群使用了自签名证书且希望跳过服务器验证，可以添加 `--insecure-skip-server-verification` 参数：
```bash
argocd cluster add my-cluster --server https://my-kubernetes-cluster.com --insecure-skip-server-verification
```

### （二）列出集群
1. **命令格式**
```bash
argocd cluster list
```
2. **操作步骤**
   执行此命令可以列出所有已添加到 Argo CD 的集群信息，包括集群名称、服务器地址等：
```bash
$ argocd cluster list
NAME        SERVER                    VERSION  STATUS      MESSAGE
my-cluster  https://my-kubernetes-cluster.com  v1.23    Successful  Cluster has been successfully connected
```

### （三）获取集群详细信息
1. **命令格式**
```bash
argocd cluster get <cluster_name>
```
2. **操作步骤**
   若要获取名为 `my-cluster` 的集群详细信息，执行：
```bash
argocd cluster get my-cluster
```
这将显示集群的详细配置参数、连接状态等信息。

### （四）删除集群
1. **命令格式**
```bash
argocd cluster delete <cluster_name>
```
2. **操作步骤**
   如果要删除名为 `my-cluster` 的集群，执行：
```bash
argocd cluster delete my-cluster
```

## 三、注意事项
1. **证书验证问题**
   - 在添加集群时，如果使用 `--insecure-skip-server-verification` 参数跳过证书验证，虽然操作方便，但会降低安全性。在生产环境中，应尽量配置正确的证书信任关系，避免使用此选项。
2. **集群连接测试**
   - 在添加集群后，建议先通过 `argocd cluster get` 查看集群的状态信息，确保连接正常且没有错误消息。如果遇到连接问题，检查网络配置、证书设置以及集群服务器是否正常运行。
3. **删除集群影响**
   - 删除集群是一个敏感操作，尤其是当有应用部署在该集群上时。在删除之前，确保相关应用已经迁移或妥善处理，否则可能导致应用部署出现问题。
4. **配置文件使用（可选参数）**
   - 当使用 `--config` 参数指定配置文件路径时，要确保文件路径正确且配置内容格式符合要求，否则可能导致添加或修改集群配置失败。
