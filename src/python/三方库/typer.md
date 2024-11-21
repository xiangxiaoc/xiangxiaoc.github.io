---
date: 2022-01-09
category: python
tag:
  - 命令行工具
---

# typer - python 命令行工具库

## 一、概述

`typer`是一个基于Python的库，用于构建命令行接口（CLI）应用程序。它建立在`click`库之上，使得创建CLI应用变得更加简单、直观且高效。
`typer`具有自动生成帮助信息、类型提示支持等优秀特性，能帮助开发者快速开发出用户友好的命令行工具。

## 二、pip安装

**安装typer**
在命令行中执行：

```bash
pip install typer
```

安装成功后，即可在Python代码中使用`typer`。

## 三、简单示例

### 1. 创建一个简单的CLI应用

```python
import typer

app = typer.Typer()

@app.command()
def hello(name: str):
    typer.echo(f"Hello {name}")

if __name__ == "__main__":
    app()
```

- 首先，导入`typer`库并创建一个`Typer`实例`app`。
- 使用`@app.command()`装饰器定义一个命令`hello`，它接受一个字符串类型的参数`name`。
- 在`hello`函数内部，使用`typer.echo`输出问候语。
- 在`if __name__ == "__main__"`块中运行`app`，这样就可以在命令行中使用这个CLI应用了。例如，在命令行中运行
  `python your_script.py hello --name=World`，就会输出`Hello World`。

### 2. 添加多个命令和选项

```python
import typer

app = typer.Typer()

@app.command()
def create_user(username: str, password: str, email: str):
    """创建一个新用户。"""
    typer.echo(f"创建用户: {username}，邮箱: {email}")

@app.command()
def delete_user(username: str):
    """删除一个用户。"""
    typer.echo(f"删除用户: {username}")

@app.command()
def list_users():
    """列出所有用户。"""
    typer.echo("列出用户列表（这里只是示例，实际需实现逻辑）")

if __name__ == "__main__":
    app()
```

- 这里定义了三个命令：`create_user`、`delete_user`和`list_users`。
- `create_user`命令接受`username`、`password`和`email`三个参数，用于创建用户相关的操作，并输出相应信息。
- `delete_user`命令接受`username`参数，用于删除用户操作。
- `list_users`命令用于列出用户，这里只是简单输出示例文本，实际应用中需要实现具体的逻辑。

## 四、常见注意事项

### 1. 参数类型和验证

- `typer`利用Python的类型提示来进行参数类型验证。确保传递给命令的参数类型与定义的类型一致，否则`typer`会抛出错误。例如，如果定义了一个
  `int`类型的参数，传递字符串会导致类型错误。

### 2. 帮助信息生成

- `typer`会自动根据函数的文档字符串（docstring）和参数类型等信息生成帮助信息。为每个命令和参数编写清晰、准确的文档字符串，有助于用户理解如何使用CLI应用。

### 3. 嵌套命令和子应用

- 当应用变得复杂时，可以创建嵌套命令和子应用。需要注意的是，要合理组织代码结构，避免过于复杂的嵌套导致代码难以维护和理解。

### 4. 与其他CLI库的兼容性

- 如果项目中同时使用了其他CLI相关的库，可能会出现冲突或不兼容的情况。需要在开发过程中仔细测试和解决可能出现的问题，特别是在导入和使用不同库的功能时。
