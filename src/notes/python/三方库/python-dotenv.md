---
date: 2022-01-09
category: python
tag:
  - 配置文件处理
---

# python-dotenv - 解析 .env 环境变量配置文件

## 一、概述

`python - dotenv` 是一个用于在Python项目中管理环境变量的实用库。在开发过程中，不同的环境（如开发环境、测试环境、生产环境）可能需要不同的配置，例如数据库连接字符串、API密钥等。
`dotenv` 库允许开发者将这些配置信息存储在一个 `.env` 文件中，并轻松地在Python代码中加载和使用这些环境变量。

## 二、pip安装

**安装python - dotenv**
在命令行中执行以下命令：

```bash
pip install python - dotenv
```

安装完成后，即可在Python代码中使用该库。

## 三、简单示例

1. **加载环境变量**
   假设项目根目录下有一个 `.env` 文件，内容如下：

```bash
DB_USERNAME=myuser
DB_PASSWORD=mypassword
API_KEY=1234567890
```

以下是Python代码示例：

```python
from dotenv import load_dotenv
import os

# 加载.env文件中的环境变量
load_dotenv()

# 获取环境变量
db_username = os.getenv('DB_USERNAME')
db_password = os.getenv('DB_PASSWORD')
api_key = os.getenv('API_KEY')

print(f"数据库用户名: {db_username}")
print(f"数据库密码: {db_password}")
print(f"API密钥: {api_key}")
```

在这个示例中：

- 首先从 `dotenv` 库中导入 `load_dotenv` 函数，从Python的标准库中导入 `os` 模块。
- 使用 `load_dotenv()` 函数加载 `.env` 文件中的环境变量。这个函数会自动查找项目根目录下的 `.env` 文件。
- 通过 `os.getenv()` 函数获取特定的环境变量，并将其存储在相应的变量中，最后打印出来。

2. **指定.env文件路径**
   如果 `.env` 文件不在项目根目录下，或者文件名不是 `.env`，可以指定文件路径。例如，假设 `.env` 文件在 `config` 目录下，名为
   `config.env`，代码如下：

```python
from dotenv import load_dotenv
import os

# 指定.env文件路径并加载
env_path = os.path.join(os.getcwd(), 'config', 'config.env')
load_dotenv(dotenv_path=env_path)

# 获取环境变量
db_username = os.getenv('DB_USERNAME')
# 其他获取操作类似...
```

这里使用 `os.path.join()` 函数构建 `.env` 文件的完整路径，并将其传递给 `load_dotenv()` 函数的 `dotenv_path` 参数来加载指定的
`.env` 文件。

## 四、常见注意事项

### 1. 安全性

- 虽然 `.env` 文件可以方便地存储配置信息，但它不应包含敏感信息（如生产环境的根密码等），如果不小心将 `.env`
  文件提交到版本控制系统（如Git），可能会导致安全问题。可以将 `.env` 文件添加到 `.gitignore` 文件中，防止其被意外提交。

### 2. 变量类型

- 存储在 `.env` 文件中的环境变量默认都是字符串类型。如果需要其他类型（如整数、布尔值等），在Python代码中使用时可能需要进行类型转换。例如，如果
  `.env` 文件中有一个变量 `PORT=8080`，在使用时可能需要使用 `int(os.getenv('PORT'))` 来获取整数类型的值。

### 3. 覆盖系统环境变量

- 当使用 `load_dotenv()` 加载 `.env` 文件中的环境变量时，如果 `.env` 文件中的变量与系统中已有的同名环境变量冲突，默认情况下，
  `.env` 文件中的变量会覆盖系统环境变量。在某些情况下，这可能不是期望的行为，可以根据需要调整代码逻辑来处理这种情况。
