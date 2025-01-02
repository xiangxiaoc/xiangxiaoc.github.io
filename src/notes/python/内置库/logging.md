---
date: 2022-01-09
category: python
tag:
  - 日志记录
---

# logging - 内置日志记录模块

日志格式属性

[https://docs.python.org/zh-cn/3/library/logging.html#logrecord-attributes](https://docs.python.org/zh-cn/3/library/logging.html#logrecord-attributes)



python logging模块

[https://www.cnblogs.com/liujiacai/p/7804848.html](https://www.cnblogs.com/liujiacai/p/7804848.html)

Python 日志最佳实践

[https://www.jianshu.com/p/c7850ac01362](https://www.jianshu.com/p/c7850ac01362)

Python之路(第十七篇)logging模块

[https://www.cnblogs.com/Nicholas0707/p/9021672.html](https://www.cnblogs.com/Nicholas0707/p/9021672.html)

# 基本使用
短时间跑脚本 - 打印到终端

```python
logging.basicConfig(
    format='[%(asctime)s] %(filename)s:%(lineno)d: [%(levelname)s] -- %(message)s'
)
logger = logging.getLogger(__name__)
logger.setLevel(args.log_level.upper())
```

crontab 跑脚本 - 写入到文件

```python
logging.basicConfig(
    filename="log/{0}.log".format(datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")),
    filemode='a',
    format='[%(asctime)s] %(filename)s:%(lineno)d: [%(levelname)s] -- %(message)s'
)
logger = logging.getLogger(__name__)
logger.setLevel(args.log_level.upper())
```

服务端日志， 按天存日志

```python
logging.basicConfig(
    filename="log/{0}.log".format(datetime.date.today().strftime("%Y-%m-%d")),
    filemode='a', 
    # example: [2022-03-22 19:43:13,110] test_log.py:36: [INFO] -- Script Start...
    format = "[%(asctime)s] %(filename)s:%(lineno)d: [%(levelname)s] -- %(message)s"
)

logger = logging.getLogger(__name__)
logger.setLevel(args.log_level.upper())

```

未归纳其他示例

```python
import logging
logging.basicConfig(
    level = logging.INFO,
    format = '[%(asctime)s] %(name)s: [%(levelname)s] %(message)s'
    )
    
logging.basicConfig(
    level=args.log_level.upper(),
    format='[%(asctime)s] %(filename)s line %(lineno)d: [%(levelname)s] %(message)s'
    )
    
logger = logging.getLogger(__name__)
logger.info("Start print log")
logger.debug("Do something")
logger.warning("Something maybe fail.")
logger.info("Finish")
```

# 自定义logger handler


```python
LOGGING_DIC = {
    'version': 1.0,
    'disable_existing_loggers': False,
    # 日志格式
    'formatters': {
        'standard': {
            'format': '%(asctime)s %(threadName)s:%(thread)d [%(name)s] %(levelname)s [%(pathname)s:%(lineno)d] %(message)s',
            'datefmt': '%Y-%m-%d %H:%M:%S',
        },
        'simple': {
            'format': '%(asctime)s [%(name)s] %(levelname)s  %(message)s',
            'datefmt': '%Y-%m-%d %H:%M:%S',
        },
        'test': {
            'format': '%(asctime)s %(message)s',
        },
        'test1': {
            'format': '%(asctime)s %(message)s',
        },
    },
    'filters': {},
    # 日志处理器
    'handlers': {
        'console_debug_handler': {
            'level': 'WARNING',  # 日志处理的级别限制
            'class': 'logging.StreamHandler',  # 输出到终端
            'formatter': 'simple'  # 日志格式
        },
        'file_info_handler': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件,日志轮转
            'filename': 'abc.log',
            'maxBytes': 800,  # 日志大小 10M
            'backupCount': 3,  # 日志文件保存数量限制
            'encoding': 'utf-8',
            'formatter': 'standard',
        },
        'file_debug_handler': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',  # 保存到文件
            'filename': 'test.log',	 # 日志存放的路径
            'encoding': 'utf-8',	# 日志文件的编码
            'formatter': 'test',
        },
        'file_deal_handler': {
            'level': 'INFO',
            'class': 'logging.FileHandler',  # 保存到文件
            'filename': 'deal.log',  # 日志存放的路径
            'encoding': 'utf-8',  # 日志文件的编码
            'formatter': 'standard',
        },
        'file_operate_handler': {
            'level': 'INFO',
            'class': 'logging.FileHandler',  # 保存到文件
            'filename': 'operate.log',  # 日志存放的路径
            'encoding': 'utf-8',  # 日志文件的编码
            'formatter': 'standard',
        },
    },
    # 日志记录器
    'loggers': {
        'logger1': {  # 导入时logging.getLogger时使用的app_name
            'handlers': ['console_debug_handler'],  # 日志分配到哪个handlers中
            'level': 'DEBUG',  # 日志记录的级别限制
            'propagate': False,  # 默认为True，向上（更高级别的logger）传递，设置为False即可，否则会一份日志向上层层传递
        },
        'logger2': {
            'handlers': ['console_debug_handler', 'file_debug_handler'],
            'level': 'INFO',
            'propagate': False,
        },
        '': {
            'handlers': ['console_debug_handler', 'file_info_handler'],
            'level': 'INFO',
            'propagate': False,
        },
        '用户操作': {
            'handlers': ['console_debug_handler', 'file_operate_handler'],
            'level': 'INFO',
            'propagate': False,
        },
    }
}
```

```python
import logging.config
import settings

logging.config.dictConfig(settings.LOGGING_DIC)
logger3 = logging.getLogger('用户充值')
logger3.info('xxx充值了5毛钱')

logger4 = logging.getLogger('用户操作')
logger4.info('xxx登录了')


logger5 = logging.getLogger('用户转账')
logger5.info('xxx给yyy转了5毛钱')

logger6 = logging.getLogger('用户提现')
logger6.info('xxx提现了5毛钱')

```

