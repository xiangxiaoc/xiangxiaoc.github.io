---
date: 2025-05-15
category: 内核服务
tag:
  - Linux
  - 防火墙
---

# iptables - 防火墙工具

ipset 是非常经典且强大的服务器防火墙管理工具

用于数据包过滤、网络地址转换(NAT)和数据包修改等

- 规则是按顺序匹配的，第一条匹配的规则将决定数据包的命运
- 默认情况下，所有链的默认策略是ACCEPT，但出于安全考虑，通常会将INPUT和FORWARD链的默认策略设置为DROP

## iptables 的表和链

iptables 使用表(table)来组织规则，每个表包含若干预定义的链(chain)，用户也可以创建自定义链。

### 主要的表

- filter 表：默认表，用于过滤数据包
    - 包含的链：INPUT, FORWARD, OUTPUT
- nat 表：用于网络地址转换
    - 包含的链：PREROUTING, OUTPUT, POSTROUTING
- mangle 表：用于修改数据包的特殊内容
    - 包含的链：PREROUTING, INPUT, FORWARD, OUTPUT, POSTROUTING
- raw 表：用于配置数据包免除连接跟踪
    - 包含的链：PREROUTING, OUTPUT

### 数据包经过的链的顺序

对于到达本机的数据包：

PREROUTING (raw→mangle→nat) → INPUT (mangle→filter) → 本地进程

对于转发的数据包：

PREROUTING (raw→mangle→nat) → FORWARD (mangle→filter) → POSTROUTING (mangle→nat)

对于本地进程发出的数据包：

OUTPUT (raw→mangle→nat→filter) → POSTROUTING (mangle→nat)

## 命令操作

### 查询

```shell
# 默认操作的是 INPUT 链
iptables -L -n -v  # 不加表默认就是查看filter表规则
iptables -t nat -L -n -v  # 查看nat表规则
```

### 允许/阻止特定IP

```shell
# 允许来自192.168.1.100的所有连接
iptables -A INPUT -s 192.168.1.100 -j ACCEPT

# 阻止来自10.0.0.5的所有连接
iptables -A INPUT -s 10.0.0.5 -j DROP
```

### 允许特定端口

```shell
# 允许SSH(22端口)的入站连接
iptables -I INPUT -p tcp --dport 22 -j ACCEPT

# 允许HTTP(80端口)和HTTPS(443端口)
iptables -I INPUT -p tcp --dport 80 -j ACCEPT
iptables -I INPUT -p tcp --dport 443 -j ACCEPT
```

### 端口转发

```shell
# 将外部访问的80端口转发到内部服务器的8080端口
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:8080
iptables -A FORWARD -p tcp -d 192.168.1.10 --dport 8080 -j ACCEPT
```

### NAT 网络地址转换

```shell
# 启用IP伪装(用于共享上网)
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

### 防止DoS攻击

```shell
# 限制同一IP的新连接数
iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 20 -j REJECT
```

### 保存和恢复规则

```shell
# 保存当前规则(根据发行版不同可能使用不同命令)
iptables-save > ./iptables.rules

# 恢复规则
iptables-restore < ./iptables.rules
```

### 清除所有规则，第一次敲别在生产环境用

```shell
iptables -F  # 清除所有链中的规则
iptables -X  # 删除所有用户自定义链
iptables -Z  # 将所有链的计数器清零
```