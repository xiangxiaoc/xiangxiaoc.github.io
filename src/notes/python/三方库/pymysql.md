---
date: 2022-01-09
category: python
tag:
  - 数据库
---

# pymysql - 操作 MySQL 数据库

## 一、概述

`pymysql`是Python中用于连接和操作MySQL数据库的一个第三方库。它实现了Python数据库API规范V2.0，使得在Python程序中可以方便地与MySQL数据库进行交互，包括执行SQL查询、插入、更新和删除数据等操作。

## 二、pip安装

**安装pymysql**

- 在命令行中执行以下命令：
  ```
  pip install pymysql
  ```
- 等待安装完成，安装成功后就可以在Python代码中导入并使用`pymysql`库。

## 三、简单示例

1. **连接数据库并查询数据**
   ```python
   import pymysql

   # 连接数据库
   connection = pymysql.connect(
       host='localhost',
       user='root',
       password='your_password',
       database='your_database'
   )

   try:
       # 创建游标对象
       with connection.cursor() as cursor:
           # 执行SQL查询
           sql = "SELECT * FROM your_table"
           cursor.execute(sql)
           # 获取查询结果
           results = cursor.fetchall()
           for row in results:
               print(row)
       # 提交事务（如果是查询操作，这一步不是必须的，但这是一个好习惯）
       connection.commit()
   except pymysql.MySQLError as e:
       print("查询出错：", e)
   finally:
       # 关闭连接
       connection.close()
   ```
2. **插入数据示例**
   ```python
   import pymysql

   # 连接数据库
   connection = pymysql.connect(
       host='localhost',
       user='root',
       password='your_password',
       database='your_database'
   )

   try:
       # 创建游标对象
       with connection.cursor() as cursor:
           # 插入数据的SQL语句
           sql = "INSERT INTO your_table (column1, column2) VALUES (%s, %s)"
           values = ('value1', 'value2')
           cursor.execute(sql, values)
       # 提交事务，插入数据时必须提交
       connection.commit()
   except pymysql.MySQLError as e:
       print("插入出错：", e)
   finally:
       # 关闭连接
       connection.close()
   ```
