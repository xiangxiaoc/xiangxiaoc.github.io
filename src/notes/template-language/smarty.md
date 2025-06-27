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
{%~* 这是不影响文本结构，不会增加空行的注释 *~%}
{%-* 相比上面的，这句注释只会移除空格和制表符，会保留换行符，所以注释还是要用上面的 *-%} 
```
新手卡关小例子
```smarty
{* 必须括号括起来，不然不会格式化 *}
{% ($var/1024)|string_format:".2f" %}
```