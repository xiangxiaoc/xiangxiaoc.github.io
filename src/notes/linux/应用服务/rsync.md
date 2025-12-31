---
date: 2025-05-13
category: 应用服务
tag:
  + Linux
  + 文件管理
---

# rsync - 文件同步服务

主要是同步后，钩子功能

Bsystemd unit 名称： rsync.service

```shell
  systemctl status rsync.service
```

* 默认主配置文件： /etc/rsyncd.conf
* 默认端口：873

## 配置示例

```ini
# uid = rsync
# gid = rsync
# port = 873
log file = /var/log/rsyncd.log   # 日志文件
pid file = /var/run/rsyncd.pid   # pid文件路径
lock file = /var/run/rsyncd.lock # 锁文件
#secrets file = /etc/rsync.scr
syslog facility = local5
list = false
uid = daCheng
gid = daCheng
use chroot = no

[module_name]
# path 指定当前模块在 rsync 服务器上的同步路径，该参数是必须指定的。
path = /home/data
# comment 给模块指定一个描述，该描述连同模块名在客户连接得到模块列表时显示给客户。
comment = xx机器数据目录

# use chroot
```

* rsync 的设计是多模块设计，一个模块对应服务器上的一个目录

## 重启服务生效

```
systemctl restart rsync.service
```

## 客户端命令

```bash
rsync -avz --progress --delete /home/data/ 192.168.0.10::data
```

## 服务端查看日志

tail -f /var/log/rsyncd.log
