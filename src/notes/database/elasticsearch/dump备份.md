---
date: 2025-05-21
category: elasticsearch
tag:
  - 数据库
---

# dump备份

找更多信息走官方：[官方github](https://github.com/elasticsearch-dump/elasticsearch-dump)

## 安装 npm elasticdump 包

```shell
npm install elasticdump -g
```

## multielasticdump 多索引的 dump 和 load

dump 整个集群，包括所有索引，所有类型的数据(包括额外三类数据：mapping setting template)

```shell
# 备份到本地
mkdir es_data
multielasticdump \ 
  --direction=dump \
  --match='^[^.].*$' \
  --ignoreType='analyzer' \
  --input=http://elasticsearch:9200 \
  --output=es_data \
  --quiet \
  --limit=2000
  
# 恢复到集群
multielasticdump \ 
  --direction=load \
  --match='^[^.].*$' \
  --ignoreType='analyzer' \
  --input=es_data \
  --output=http://elasticsearch:9200 \
  --quiet \
  --limit=2000
```

`^[^.].*$` 这个正则是用来匹配所有索引，但排除以 . 开头的索引，这些是es内部的索引，不需要dump出来

### 关于选项参数

#### includeType

> Six options are supported - data,mapping,analyzer,alias,settings,template
>
> NB: analyzer & alias types are ignored by default

官方说 analyzer 和 alias 类型默认就是忽略的，也就是 includeType 选项什么都不指定时，会备份 data, mapping, settings,
template

但我觉得 alias 也需要，所以建议使用 ignoreType

#### ignoreType

多个需要忽略的格式如下：

`--ignoreType='analyzer,alias'`

#### quiet

>
> ```text
> --quiet
>   Suppress all messages except for errors
>   (default: false)
>```

加 --quiet 选项可以减少已备份对象数量和offset等进度信息的输出

#### limit

> ```text
> --limit
>   How many objects to move in batch per operation
>   limit is approximate for file streams
>   (default: 100)
> ```

默认值 100 个对象一批，实测不是很占用 cpu 和 内存，可以适当调高点