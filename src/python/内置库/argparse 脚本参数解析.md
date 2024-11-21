---
date: 2022-01-09
category: python
tag:
  - 命令行工具
---

# argparse - 脚本参数解析

## ArgumentParser
示例代码，可以写在单独的模块里，别的模块 `from xxx_args.py import args` 直接实例化出 args

**xxx_args.py**

```python
"""
Demo of argparse
"""
import os
import textwrap
from argparse import ArgumentParser, ArgumentDefaultsHelpFormatter, RawTextHelpFormatter

## 在任意目录执行脚本时，python 进程都会临时切换到脚本所在目录再执行
dir_path, script_name = os.path.split(__file__)
if dir_path != '':
    os.chdir(dir_path)


def get_arg():
    class Formatter(ArgumentDefaultsHelpFormatter, RawTextHelpFormatter):  ## 继承两种 Formatter 类的方法
        pass

    samples = textwrap.dedent(f'''\
        例子：
          python3 {script_name} aaa
          python3 {script_name} bbb
          python3 {script_name} ccc
    ''')
    parser = ArgumentParser(description=__doc__, epilog=samples, formatter_class=Formatter)
    parser.add_argument(dest="file", metavar='filepath', help="'rowid,昵称' 格式的csv文件路径")  ## 默认必须参数，不需要 -x/--xxx 参数标志
    parser.add_argument("-r", "--require-arg", dest='require_arg', required=True,
                        help="required arg for script running")
    parser.add_argument("-s", "--switch", action="store_true", help="switch flag")
    parser.add_argument('-f', "--input-file", nargs='+', help="input one or multiple files")
    parser.add_argument("-t", "--thread-num", dest='thread_num', type=int, default=1, metavar='',
                        help="Set thread number")
    parser.add_argument("-l", "--log-level", dest='log_level', metavar='', default="info",
                        choices=('debug', 'info', 'warning', 'error', 'critical'),
                        help="指定日志等级，可选：[debug|info|warn|error|critical]")
    parser.add_argument('-l2f', '--log-to-file', dest='log_to_file', action='store_true',
                        help='保存日志文件，不打印到控制台')

    return parser.parse_args()


if __name__ == '__main__':
    arg = get_arg()

```

### ArgumentParser 的 add_argument 方法参数
| 参数 | 含义 | 示例 |
| --- | --- | --- |
| metavar | help 时候参数值的描述 | |
| default | 没有设置值情况下的默认参数 | |
| required | 表示这个参数是否一定需要设置 | |
| type | 读取时强行转换参数类型，默认 str  | parser.add_argument('-number', type=int) |
| choices | 参数值只能从几个选项里面选择 | parser.add_argument('-arch', required=True, choices=['alexnet', 'vgg']) |
| help | 指定参数的说明信息 | |
| dest | 默认的变量名是--或-后面的字符串，但可以通过 dest 参数修改这个变量名 | |
| nargs | 设置参数在使用可以提供的个数 | |


#### nargs 的几个值
| 值  |  含义 |
| --- | --- |
| N (int) | 参数的绝对个数（例如：3） |
| '?'   | 0或1个参数 |
| '*' | 0或所有参数 |
| '+' | 0或所有参数；只是usage帮助信息提示至少需要一个 |


使用 nargs 后，不管等于上述表中的哪一个值，所有参数会被封装成 list ，即使只有一个参数。

## 子命令
```python
"""
支持子命令的 Demo
"""
import os
import textwrap
from argparse import ArgumentParser, ArgumentDefaultsHelpFormatter, RawTextHelpFormatter

## 在任意目录执行脚本时，python 进程都会临时切换到脚本所在目录再执行
dir_path, script_name = os.path.split(__file__)
if dir_path != '':
    os.chdir(dir_path)


def cmd_check(argument):
    print(f'cmd_check {argument}')


def cmd_clean(argument):
    print(f'cmd_clean {argument}')


class Formatter(ArgumentDefaultsHelpFormatter, RawTextHelpFormatter):
    pass  ## 只是继承这两种类的方法


samples = textwrap.dedent(f'''\
    例子：
      任务1
      python3 {script_name} aaa

      任务2
      python3 {script_name} bbb

      任务3
      python3 {script_name} ccc
''')
parser = ArgumentParser(description=__doc__, epilog=samples, formatter_class=Formatter)

## 全局参数，必须放置于子命令之前（子命令左边）
parser.add_argument("-r", "--require-arg", dest='require_arg', required=True,
                    help="required arg for script running")
parser.add_argument("-s", "--switch", action="store_true", help="switch flag")
parser.add_argument('-f', "--input-file", nargs='+', metavar='file', help="input one or multiple files")
parser.add_argument("-t", "--thread-num", dest='thread_num', type=int, default=1, metavar='',
                    help="Set thread number")
parser.add_argument("-l", "--log-level", dest='log_level', metavar='', default="info",
                    choices=('debug', 'info', 'warning', 'error', 'critical'),
                    help="指定日志等级，可选：[debug|info|warn|error|critical]")
parser.add_argument('-l2f', '--log-to-file', dest='log_to_file', action='store_true',
                    help='保存日志文件，不打印到控制台')

## 创建子解析器
subparsers = parser.add_subparsers(metavar='subcommand', help='子命令后加 -h 获取子命令的帮助信息')

## 子命令 check
check = subparsers.add_parser('check', aliases=['ck'], help='一键检查', description='一键检查xxx',
                              formatter_class=Formatter)
check.add_argument('objective', help='检查目标')
check.set_defaults(func=cmd_check)

## 子命令 clean
clean_samples = textwrap.dedent(f'''\
    例子：
      任务1
      python3 {script_name} clean data

      任务2
      python3 {script_name} clean log
''')
clean = subparsers.add_parser('clean', aliases=['cl'], help='一键清理', epilog=clean_samples,
                              formatter_class=Formatter)
clean.add_argument('objective', help='清理目标，日志或数据')
clean.set_defaults(func=cmd_clean)

if __name__ == '__main__':
    args = parser.parse_args()
    if not hasattr(args, 'func'):  ## 处理未输入子命令的报错
        parser.parse_args(['-h'])
    args.func(args)

```

