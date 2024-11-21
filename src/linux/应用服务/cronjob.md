---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 定时任务
---

# CronJob - 定时任务管理

循环定时任务

### [](#安装与启用)安装与启用

+ yum 包名：crontabs
+ systemctl 服务名：crond

## [](#客户端命令)客户端命令

```plain
# 查看有哪些 cron 任务
crontab [-u USER] -l
# 编辑 cron 任务
crontab -e
# 删除用户的 cron 任务
crontab -r USER
```

### [](#例子)例子

```plain
# 每晚 21:30 重启 httpd
30 21 * * * systemctl restart httpd
# 每月 1,10,22 日的 4:45 重启 httpd
45 4 1,10,22 * * systemctl restart httpd
# 每月 1到10日 4:45 重启 httpd
45 4 1-10 * * systemctl restart httpd
# 每隔两分钟重启 httpd
*/2 * * * * systemctl restart httpd
1-59/2 * * * * systemctl restart httpd
# 23点到7点之间 每隔一小时重启 httpd
0 23-7/1 * * * systemctl restart httpd
# 四月的第一个星期日 1:59 重启 httpd
59 1 1-7 4 * test `date +\%w` -eq 0 && systemctl restart httpd
# 每隔半分钟 重启 httpd
*/1 * * * * systemctl restart httpd && sleep 30 && systemctl restart httpd
```

## [](#日志)日志

+ /var/log/cron

