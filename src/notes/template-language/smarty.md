---
icon: /assets/icon/smarty.png
date: 2025-05-27
category: 模版语言
tag:
  - php
---

# Smarty - php 模版引擎

[官方文档](https://www.smarty.net/docs/zh_CN/)

## 基础

```smarty
{* 这是一行注释 *}

{* 模版字符串 *}
{% $a = "https://`$host`:`$port`/`$path`" %}

{* 遍历 *}
[
{% foreach $list as $item %}
    {% $item %}
{% /foreach %}
]

{
{% foreach $map as $key => $value %}
    {% $key %}: {% $value %}
{% /foreach %}
}
```

关于波浪号的深入理解：

if 和 /if 左边有4个空格，如果不加 ~ , for循环会把四个空格都渲染出来，就会发现每一行都多一个缩进的距离

```smarty
{% foreach $data as $k => $v %}
    {%~ if $k > 10000 %}
    {% $k %}: {% $v %}
    {%~ /if %}
{% /foreach %}
```

新手卡关小例子
```smarty
{* 必须括号括起来，不然不会格式化 *}
{% ($var/1024)|string_format:".2f" %}
```