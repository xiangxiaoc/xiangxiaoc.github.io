---
date: 2026-09-10
category: 命令工具
tag:
  - Linux
  - 文件接口
---

# lsof - 还没有一句话概括

实用命令：

```shell
# 找出与远端ip有连接的进程
while true; do lsof -nP -i @192.168.0.1 | grep -v PID | awk '{print $2}' | xargs -I {} cat /proc/{}/cmdline | tr '\0' ' '; done
```