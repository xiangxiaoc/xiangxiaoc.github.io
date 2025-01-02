---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 网络
---

# DHCP - 动态主机配置协议

动态主机配置协议（DHCP，Dynamic Host Configuration
Protocol），该协议用于自动管理局域网内主机的IP地址、子网掩码、网关地址及DNS地址等参数，可以有效地提升IP地址的利用率，提高配置效率，并降低管理与维护成本。

#### [](#术语)术语

> 作用域：一个完整的IP地址段，DHCP协议根据作用域来管理网络的分布、分配IP地址及其他配置参数。
>
> 超级作用域：用于管理处于同一个物理网络中的多个逻辑子网段。超级作用域中包含了可以统一管理的作用域列表。
>
> 排除范围：把作用域中的某些IP地址排除，确保这些IP地址不会分配给DHCP客户端。
>
> 地址池：在定义了DHCP的作用域并应用了排除范围后，剩余的用来动态分配给DHCP客户端的IP地址范围。
>
> 租约：DHCP客户端能够使用动态分配的IP地址的时间。
>
> 预约：保证网络中的特定设备总是获取到相同的IP地址。
>

### [](#安装与启用)安装与启用

+ yum 包名：dhcp
+ apt 包名：isc-dhcp-server
+ RHEL 系 systemctl 服务名：dhcpd
+ Debian 系 systemctl 服务名：isc-dhcp-server

## [](#rhel-配置)RHEL 配置

+ /etc/dhcp/dhcpd.conf

```plain
vim /etc/dhcp/dhcpd.conf
```

```plain
# 设置DNS服务不自动进行动态更新
ddns-update-style none;
# 忽略客户端更新DNS记录
ignore client-updates;
# 作用域为192.168.163.0/24网段
subnet 192.168.163.0 netmask 255.255.255.0 {
        # IP地址池为192.168.163.50-150（约100个IP地址）
        range 192.168.163.50 192.168.163.150;
        # 定义客户端默认的子网掩码
        option subnet-mask 255.255.255.0;
        # 定义客户端的网关地址
        option routers 192.168.163.22;
        # 定义默认的搜索域
        option domain-name "linuxprobe.com";
        # 定义客户端的DNS地址
        option domain-name-servers 192.168.163.22;
        # 定义默认租约时间（单位：秒）
        default-lease-time 21600;
        # 定义最大预约时间（单位：秒）
        max-lease-time 43200;
        # 指定主机固定 IP
        host linuxprobe {
                hardware ethernet 00:0c:29:27:c6:12;
                fixed-address 192.168.163.66;
        }
}
```

#### [](#分配日志)分配日志

```plain
tail -f /var/log/messages | grep DHCP
```

## [](#debian-配置)Debian 配置

+ /etc/default/isc-dhcp-server
+ /etc/dhcp/dhcpd.conf

