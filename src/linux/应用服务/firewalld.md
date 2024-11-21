---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 网络
  - 防火墙
---

# firewalld - 防火墙服务器

RHEL7 开始使用 firewalld 来替代 iptables 防火墙

## [](#安装与启用)安装与启用

+ RHEL 7 、CentOS 7 自带
+ apt 包名：firewalld
+ 服务名：firewalld

### [](#firewalld中常用的区域名称及策略规则)firewalld中常用的区域名称及策略规则

| 区域       | 默认规则策略                                                                           |
|----------|----------------------------------------------------------------------------------|
| trusted  | 允许所有的数据包                                                                         |
| home     | 拒绝流入的流量，除非与流出的流量相关；而如果流量与ssh、mdns、ipp-client、amba-client与dhcpv6-client服务相关，则允许流量 |
| internal | 等同于home区域                                                                        |
| work     | 拒绝流入的流量，除非与流出的流量数相关；而如果流量与ssh、ipp-client与dhcpv6-client服务相关，则允许流量                 |
| public   | 拒绝流入的流量，除非与流出的流量相关；而如果流量与ssh、dhcpv6-client服务相关，则允许流量                             |
| external | 拒绝流入的流量，除非与流出的流量相关；而如果流量与ssh服务相关，则允许流量                                           |
| dmz      | 拒绝流入的流量，除非与流出的流量相关；而如果流量与ssh服务相关，则允许流量                                           |
| block    | 拒绝流入的流量，除非与流出的流量相关                                                               |
| drop     | 拒绝流入的流量，除非与流出的流量相关                                                               |

### [](#命令行管理工具)命令行管理工具

```plain
firewall-cmd
```

| 参数                        | 作用                          |
|---------------------------|-----------------------------|
| --get-default-zone        | 查询默认的区域名称                   |
| --set-default-zone=<区域名称> | 设置默认的区域，使其永久生效              |
| --get-zones               | 显示可用的区域                     |
| --get-services            | 显示预先定义的服务                   |
| --get-active-zones        | 显示当前正在使用的区域与网卡名称            |
| --add-source=             | 将源自此IP或子网的流量导向指定的区域         |
| --remove-source=          | 不再将源自此IP或子网的流量导向某个指定区域      |
| --add-interface=<网卡名称>    | 将源自该网卡的所有流量都导向某个指定区域        |
| --change-interface=<网卡名称> | 将某个网卡与区域进行关联                |
| --list-all                | 显示当前区域的网卡配置参数、资源、端口以及服务等信息  |
| --list-all-zones          | 显示所有区域的网卡配置参数、资源、端口以及服务等信息  |
| --add-service=<服务名>       | 设置默认区域允许该服务的流量              |
| --add-port=<端口号/协议>       | 设置默认区域允许该端口的流量              |
| --remove-service=<服务名>    | 设置默认区域不再允许该服务的流量            |
| --remove-port=<端口号/协议>    | 设置默认区域不再允许该端口的流量            |
| --parmanent               | 永久生效，当前不生效                  |
| --reload                  | 让“永久生效”的配置规则立即生效，并覆盖当前的配置规则 |
| --panic-on                | 开启应急状况模式                    |
| --panic-off               | 关闭应急状况模式                    |

### [](#gui-管理工具)GUI 管理工具

```plain
firewall-config
```

