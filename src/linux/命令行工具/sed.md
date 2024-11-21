---
date: 2022-01-09
category: 命令行工具
tag:
  - Linux
  - 行文本处理
  - 脚本命令
---

# sed - 行文本修改

sed 命令可以直接修改文件内容，适合在脚本里使用，达到直接修改文件内容的目的

## 用法

```shell
sed [选项] "[动作]" 文件名
```

| 选项  | 	作用                                                     |
|-----|---------------------------------------------------------|
| -n  | 	只输出 "[动作]" 处理过的那一行的字符串                                 |
| -e  | 	允许对输入数据应用多条sed编辑   sed -e "1 a abc" -e "5 a cba" a.txt |
| -i	 | 用sed的修改结果直接修改读取数据的文件，而不是由屏幕输出                           |
| -r  | 	支持正则表达式                                                |

| 动作	             | 作用                                     |
|-----------------|----------------------------------------|
| 5 a abc	        | 在第5行下面加一行字符串 abc，abc 在第6行              |
| 5 c abc         | 	把第5行替换成 abc                           |
| 5 i abc	        | 在第5行这里插入一行字符串 abc，abc 在第5行，第5行下移到第6行   |
| 5 d	            | 删除第5行，第6行上移到第5行                        |
| 5 p             | 	输出第5行                                 |
| 5 s/abc/cba/1	  | 把第5行的第一个 abc 替换为 cba，可以省略为 5s/abc/cba/ |
| 5 s/abc/cba/g	  | 把第5行的每一个 abc 替换为 cba                   |
| 5 s/abc/cba/2g	 | 把第5行的第2个及以后的每一个 abc 替换为 cba            |

## 其他示例

### 范围操作

如 2,5 表示第2行、第3行、第4行、第5行都执行这个动作

```shell
# 2 3 4 5 行下面都加一行abc
sed "2,5 a abc" a.txt
# 2 3 4 5 行都删除
sed "2,5 d" a.txt
```

但是 "[动作]" c 不是每一行都替换，而是2到5行这四行替换为一行 abc

```shell
sed "2,5 c abc" a.txt
```

$ 表示最后一行

```shell
# 把第5行到最后一行的每一个 abc 都替换为 cba
sed "5,$ s/abc/cba/g" a.txt
```

没有指定范围就是全部行

```shell
# 清空
sed "d" a.txt
# 每一行都替换
sed "s/abc/cba/g"
```

### s 替换操作 详解

| 动作              | 	作用                                                         |
|-----------------|-------------------------------------------------------------|
| 2,5             | s/abc/cba/g ; 5,$ s/cba/abc/g	支持分号分隔，从而不用 sed -e 动作1 -e 动作2 |
| 1,5             | s/^/#/	1到5行前面加#                                             |
| 5,10            | s/$/;/	5到10行最后加;                                            |
| s/user/&name/g	 | 把所有的 user 替换为 username，变量&就是被匹配的变量 user                     |

#### 示例

```shell
curl -o mandatory.yaml https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
# 一次 sed ，多次替换
sed -ri 's#quay.io#quay.azk8s.cn#g;/authorization/s#v1beta1#v1#g' mandatory.yaml
```

### 匹配操作

| 动作	                                                                                   | 作用                                         |
|---------------------------------------------------------------------------------------|--------------------------------------------|
| /IPADDR/ =	                                                                           | 匹配到有 IPADDR 的哪一行，然后获取行号                    |
| /PermitRootLogin/ s/^/#/	                                                             | 匹配到 PermitRootLogin 那一行，然后注释掉              |
| /\<Directory "/home/www">/,/\</Directory>/ c AllowOverride None\nRequire all granted	 | 从 \<Directory "/home/www"> 到 \</Directory> |

### 动作嵌套

| 动作	                                | 作用                                              |
|------------------------------------|-------------------------------------------------|
| /c/ {/a/ d }	                      | 先匹配 c，再匹配到 a 后删除该行                              |
| 1,5 {/a/{/b/ d }}	                 | 在1到5行内，先匹配到 a 在这一行再匹配到 b ，就把这行删掉                |
| `1,$ {/^#/ d ; /^$/ d ;s/^ *//g}`	 | 从第一行到最后一行，如果匹配到以#开头，则删除；如果是空行，也删除；如果前面有空格，则去除空格 |

## 示例
取引号内的值
```shell
$ cat a.txt
eqfqefeq"xyzabc"efqevqer
$ cat a.txt | sed -r 's/.*"(.+)".*/\1/'
xyzabc
```

去空格
```shell
# 删除行首空格
cat 1.txt | sed 's/^[ \t]*//g'
# 删除行末空格
cat 1.txt | sed 's/[ \t]*$//g'
# 删除所有空格
cat 1.txt | sed 's/[[:space:]]//g'
```
隔行提取
```shell
sed -n '1~2p' file # 打印奇数行
sed -n '2~2p' file # 打印偶数行
sed -n '1~3p' file # 打印 1,4,7,10,13... 行
```
