---
date: 2022-01-09
category: 命令行工具
tag:
  - Linux
  - 行文本处理
---

# sort uniq - 多个大文件合并去重

## sort

### 示例
```shell
# 以逗号为列分隔符分出多列，然后根据第二列排序
sort -t ',' -k 2
# 排序加去重
sort -u
```

## 和 uniq 组合使用

交集

uniq -d 只显示有重复的部分，即只出现一次的行会被去掉
```shell
sort a.txt b.txt | uniq -d
```
求交集还有个特殊限制，a.txt 和 b.txt 必须进行过去重

并集
```shell
sort a.txt b.txt | uniq
```

差集

uniq -u 只显示没有重复的部分，所以整体就是只输出 a 中没有 b 的部分
```shell
sort a.txt b.txt b.txt | uniq -u
```
