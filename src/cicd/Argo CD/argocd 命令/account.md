---
date: 2022-01-09
category: Argo
tag:
   - argocd 命令
---

# account - 管理本地账号

## 一、概述
`argocd account` 命令用于管理 Argo CD 用户账户相关的操作，包括修改密码、获取用户信息等。

## 二、常用操作示例

### （一）修改密码
1. **命令格式**
```bash
argocd account update-password
```
2. **操作步骤**
    - 执行该命令后，系统会提示输入当前密码和新密码。按照提示输入相应信息即可完成密码修改。例如：
```bash
$ argocd account update-password
*** Enter current password: 
*** Enter new password: 
*** Confirm new password: 
Password updated
```

### （二）获取当前用户信息
1. **命令格式**
```bash
argocd account get-user-info
```
2. **操作步骤**
    - 执行此命令，会显示当前登录用户的相关信息，如用户名等。
```bash
$ argocd account get-user-info
{
  "name": "your_username",
  "enabled": true,
  "groups": [
    "system:masters"
  ]
}
```

## 三、注意事项
1. **密码安全**
    - 在修改密码时，确保新密码具有足够的强度。避免使用简单的、容易被猜到的密码，如纯数字、常见单词等。同时，要妥善保管好密码，不要将其泄露给无关人员。
2. **权限问题**
    - 执行 `argocd account` 相关命令可能需要相应的权限。如果遇到权限不足的错误提示，需要检查用户的角色和权限配置，确保具有执行这些操作的权限。
3. **备份重要信息**
    - 在进行可能影响用户账户（如修改密码）的操作之前，建议对相关的配置信息或重要数据进行备份，以防万一出现问题可以及时恢复。
