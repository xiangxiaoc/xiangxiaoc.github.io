---
date: 2022-01-09
category: python
tag:
  - 数据分析
---

# pandas - 表格数据处理利器

## 一、概述

Pandas是Python中一个用于数据处理和分析的强大库。它提供了高效、灵活的数据结构和数据分析工具，能够轻松地处理各种类型的数据，如表格数据、时间序列数据等。Pandas建立在NumPy库的基础上，使得数据处理更加便捷和高效。

## 二、pip安装

**安装Pandas**
在命令行中执行：

```bash
pip install pandas
```

安装成功后即可在Python代码中使用。

## 三、简单示例

### 1. 数据结构之Series

```python
import pandas as pd

# 创建一个Series
s = pd.Series([1, 3, 5, np.nan, 6, 8])
print(s)
```

这里创建了一个简单的`Series`对象，它是一种类似于一维数组的数据结构，可以存储不同类型的数据，包括缺失值（这里用`np.nan`表示）。

### 2. 数据结构之DataFrame

```python
import pandas as pd
import numpy as np

# 创建一个DataFrame
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 35],
        'city': ['New York', 'London', 'Paris']}
df = pd.DataFrame(data)
print(df)
```

- 上述代码创建了一个`DataFrame`，它是一个二维表格数据结构，类似于电子表格或SQL表。
- 可以通过字典来创建，其中字典的键是列名，值是相应列的数据。

### 3. 数据读取与基本操作

```python
import pandas as pd

# 读取CSV文件
df = pd.read_csv('data.csv')

# 查看数据的前几行
print(df.head())

# 获取数据的形状（行数和列数）
print(df.shape)

# 查看列名
print(df.columns)
```

这里展示了从CSV文件读取数据（`read_csv`函数支持多种文件格式，如CSV、Excel等），以及查看数据的一些基本属性，如前几行数据（`head`
方法）、数据形状（`shape`属性）和列名（`columns`属性）。

### 4. 数据选择与过滤

```python
import pandas as pd

# 读取CSV文件（假设存在）
df = pd.read_csv('data.csv')

# 选择特定的列
selected_columns = df[['column1', 'column2']]
print(selected_columns)

# 根据条件过滤行
filtered_data = df[df['column1'] > 10]
print(filtered_data)
```

- 代码中通过列名选择特定列的数据，得到一个新的`DataFrame`。
- 同时也展示了根据条件（这里是`column1`的值大于10）过滤行的操作。

## 四、常见注意事项

### 1. 数据类型

- Pandas会自动推断数据类型，但有时可能推断不准确。例如，读取包含日期数据的文件时，可能需要手动指定日期格式来确保数据类型正确。可以使用
  `astype`方法进行数据类型转换。

### 2. 内存使用

- 处理大规模数据时，要注意Pandas对象（如`DataFrame`）占用的内存。可以使用`memory_usage`
  方法查看数据占用内存情况，并且可以通过一些技巧（如合适的数据类型选择、数据分块处理等）来优化内存使用。

### 3. 索引操作

- Pandas中的索引非常重要，它可以用于数据选择、对齐等操作。但在修改索引或者进行基于索引的操作时要小心，因为不正确的索引操作可能导致数据丢失或错误的结果。

### 4. 数据缺失处理

- 数据中可能存在缺失值（`NaN`）。在进行数据分析和建模之前，通常需要处理这些缺失值，可以使用`dropna`方法删除包含缺失值的行或列，或者使用
  `fillna`方法填充缺失值。不同的处理方式会对分析结果产生不同的影响，需要根据具体情况选择合适的方法。
