---
date: 2022-01-09
category: 命令行工具
tag:
  - Linux
  - 大文件处理
---

# split - 大文件分割

## 用法
```shell
split [OPTION]... [INPUT [PREFIX]]
```

## 选项
- -a 指定后缀长度，得根据要分割的结果数来确定，就分几个 -a 1，默认 -a 为 2
- -d 使用数字后缀 0-9，默认是字母后缀

## 示例
```shell
# 定行切割
# split -l 行数 -a 1 -d file file.
split \
	-l 500000 \
  -a 2 \
  -d \
  super_big.csv \
  small.csv.part.

# 按最终结果文件的数量切割，并且分割时不切断行
# split -n l/数量 -a 1 -d file file.
# 注：`-n l/n` mac 的 split 不支持
split \
  -n l/50 \
  -a 2 \
  -d \
  super_big.csv \
  small.csv.part.
```
