---
date: 2022-01-09
category: python
tag:
  - python基础
---

# time 和 datetime - 内置时间处理

## datetime

```python
import datetime

####################
# date 类
today = datetime.date.today()
today.strftime("%y-%m-%d")  # 21-02-05
today.strftime("%Y-%m-%d")  # 2021-02-05
today.strftime("%d/%b/%Y")  # 05/Feb/2021  nginx 日志

# 获取昨天的日期
yesterday = today - datetime.timedelta(days=1)

######################
# datetime 类
now = datetime.datetime.now()
now.strftime("%F")  # 21-02-05
now.strftime("%Y-%m-%d_%H-%M-%S")  # 2021-12-17_15-04-37
now.strftime("%Y%m%d_%H%M%S")  # 20211217_150437
now.timestamp()  # 返回浮点型时间戳

# 获取一小时前的时间
one_hour_ago = now - datetime.timedelta(hours=1)


# 时间戳转 datetime 对象
dt = datetime.datetime.fromtimestamp(1675753756) # 必须是 秒级时间戳 ( 200年内都是 10 位数字 )
# 具体的字符串格式转 datetime 对象
parsed_time = datetime.datetime.strptime(time_str, "%Y%m%d%H%M%S") # 20211217150437
```

## time

```python
import time

# time 模块
now_timestamp = time.time() #  1639724897.436
```

