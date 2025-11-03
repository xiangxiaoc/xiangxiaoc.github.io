---
date: 2022-01-09
category: 命令工具
tag:
  - Linux
  - 行文本处理
  - 日常命令
---

# grep - 行文本过滤

用法格式

```shell
grep [参数] 关键词 文件
```

参数作用

| 参数            | 	作用                                |
|---------------|------------------------------------|
| -F            | 	转义默认的正则表达式，正则符号一律视为普通字符           |
| -E            | 	匹配拓展的正则表达式                        |
| -v            | 	反选或者说屏蔽有关键词的行                     |
| -n            | 	显示行号和关键词所在的行（5:xxxxxxxx）          |
| -c            | 	仅显示一共找到了多少行，不用再接一个                | wc -l 了
| -w            | 	精确匹配一个单词                          |
| -i            | 	忽略大小写                             |
| -b            | 	将可执行文件（binary）当作文本文件（text）来搜索 ??? |
| -f filePath   | 	将文本文件中的每一行拿来匹配                    |
| --color=never | 	匹配到的关键词不要颜色高亮                     |

## 案例

求两个列表文件的交集

```shell
grep -f a.txt -F b.txt
```

求两个列表文件的差集

```shell
# b.txt - a.txt
grep -f a.txt -F -v b.txt
```

解析json

```shell
# 返回内容： {"code":0,"data":"success","message":""}
curl -s http://221.178.77.37:8804/book-mall/health/status | grep -Po '(?<=code":)[0-9]+'
```

正则匹配

```shell
# 匹配 2022-04-23 19:30 之前的日志
grep -E '2022-04-23T[0-1]{1}[0-8]{1}'  apps/openresty/nginx/logs/micro-gateway-8443_access.log
grep -E '2022-04-23T19:[0-2]{1}' apps/openresty/nginx/logs/micro-gateway-8443_access.log

# 匹配 2022-04-23 19:30 - 21:20 之间的日志
grep -E '2022-04-23T19' apps/openresty/nginx/logs/micro-gateway-8443_access.log
grep -E '2022-04-23T2[9,0]{1}:' apps/openresty/nginx/logs/micro-gateway-8443_access.log
```
