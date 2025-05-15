---
date: 2025-05-14
category: 内核服务
tag:
  - Linux
  - 防火墙
---

# ipset - iptables 辅助工具

ipset 是 Linux 系统中用于管理 IP 地址、网络段、端口等集合的工具，常用于配合 iptables 或 nftables 实现高效的防火墙规则

ipset 依赖内核模块 netfilter/ipset

## 命令操作

```shell
    # 查看当前机器上有哪些集合
    ipset list -t
    # 查看集合，只打印名字。可用于脚本遍历
    ipset list -n
    
    ipset create office-net hash:net
    ipset add office-net 192.168.1.0/24
    
    ipset create ssh-port bitmap:port range 0-65535
    ipset add ssh-port 30000-31000
```

### 案例

查一个ip网段或一个ip是否属于一个ip集合
```shell
    for listname in $(ipset list -name | grep -v port); do 
      ipset test $listname 192.168.0.0/16
    done
```