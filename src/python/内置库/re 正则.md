---
date: 2022-01-09
category: python
tag:
  - 文本处理
---

# re - 正则表达式

# 导入
```python
import re
```

# 例子
## re.findall
```python

re.findall('.+', 'abc\mdef\ng') # ['abc','def','g']
re.findall('.+', 'abc\mdef\ng', flags=re.DOTALL) # 让.包括换行符 ['abc\ndef\ng']

s = '''xqwe
asd
xsad
xfgg
'''
re.findall('^x', s, flags=re.M)  # ['x','x','x']
```

flags 更多参数

[https://docs.python.org/zh-cn/3/library/re.html#flags](https://docs.python.org/zh-cn/3/library/re.html#flags)

re.I 忽略大小写

re.M 匹配每行的行首

### 正则括号处理
```python
phone_number='''\
13429582935
15302859926
132852729572881028
15302859926 13429582935
'''
re.findall(r'\b(?:13[0-9]|14[5-9]|15[0-35-9])\d{8}\b', phone_number)
```

## re.search
匹配不到返回 None

只返回匹配规则的第一个值，而且是个 Match 对象

```python
m = re.search('\d{3,4}-\d{7,8}', 'Tel: 028-7654321') # 返回 <re.Match object; span=(5, 16), match='028-7654321'>
m.span() # 获取索引 (5, 16)
m.group() # 获取匹配结果 028-7654321
```

### 正则分组
```python
m = re.search('(\d{3,4})-(\d{7,8})', 'Tel: 028-7654321') # 返回 <re.Match object; span=(5, 16), match='028-7654321'>
m.span() # 获取索引 (5, 16)
m.group() # 获取匹配结果 028-7654321
m.group(1) # 获取匹配结果 028
m.group(2) # 获取匹配结果 7654321
```

## re.finditer
匹配不到返回 None

返回匹配规则的所有值，返回的是个迭代器，每次迭代能返回一个 Match 对象

```python
m_iter = re.finditer('(\d{3,4})-(\d{7,8})', 'Tel: 028-7654321 Tel: 022-7654320') # 返回 <re.Match object; span=(5, 16), match='028-7654321'>
for m in m_iter:
	m.group(1)

# 028 
# 022
# 就可以统计各区号数量了
```

### 例子： 字符串转字典
```python
s = '''a: 1
c: 2
'''

dic = {}
m_iter = re.finditer('(.*): (.*)', s)
for m in m_iter:
    dic[m.group(1)] = m.group(2)

print(dic)
```

## re.sub
替换，脱敏

```python
# 匹配到的结果全部替换
re.sub('(\d{3,4})-(\d{7,8})', '***', 'Tel: 028-7654321 Tel: 022-7654320') 
# 'Tel: *** Tel: ***'

# 如果被替换的参数是个函数，则会生成多个 match 对象，
# 每一个 match 对象作为参数传进这个函数，然后执行一遍这个函数，然后函数返回值作为结果去替换
# 直到每个 match 对象都作为参数执行完函数为止
re.sub('(\d{3,4})-(\d{7,8})',
       lambda m: m.group()[:2] + '***' + m.group()[-2:],
       'Tel: 028-7654321 Tel: 022-7654320') 
# 'Tel: 02***21 Tel: 02***20'
```

## re.subn
多一个替换了次数

```python
re.subn('(\d{3,4})-(\d{7,8})',
       lambda m: m.group()[:2] + '***' + m.group()[-2:],
       'Tel: 028-7654321 Tel: 022-7654320') 

# ('Tel: 02***21 Tel: 02***20', 2)
```

## re.split
按照正则表达式去分割

```python
s = 'xyg,- time,   !dog,   cat   '
re.split('\W+', s) # ['xyg', 'time', 'dog', 'cat', '']
```

## re.compile
多次使用一个正则表达式使用

```python
res = re.compile('.*')
res.findall()
```

