---
date: 2025-05-15
category: 内核服务
tag:
  - Linux
  - 网络排查
---

# tcpdump - 网络抓包工具

```shell
# 全部网卡进出都跟 80端口有关的包 
# -n 保留ip，不要解析成主机名，
# -nn 保留端口数字，不需要解析成服务名例如 80 -> http 22 -> ssh
# -q 精简输出，只显示 ip 端口，和协议
tcpdump -i any -nnq port 80
```