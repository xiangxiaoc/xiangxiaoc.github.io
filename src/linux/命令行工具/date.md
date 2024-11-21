---
date: 2022-01-09
category: 命令行工具
tag:
  - Linux
  - 时间库
  
excerpt: false
---

# date - linux 中的时间处理库

以指定格式获取当前时间

```shell
date +"%F %T" #  2021-12-01 16:43:27 shell 编程日志常用
date +"%d/%b/%Y" # 01/Dec/2021 nginx 日志里的日期格式

date +%Y%m%d%H%M%S # 20220725104209 年月日时分秒
```

相对现在的时间做计算

```shell
date -d "-2hour" +"%F %T"   # 两小时前
date -d "-1day" +"%F %T"    # 1天前

date -d "1 day ago" +"%y%m%d" # ago 写法
```
