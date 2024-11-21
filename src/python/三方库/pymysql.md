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
    - 在这个示例中：
        - 首先导入`pymysql`库。
        - 使用`connect`函数建立与MySQL数据库的连接，需要提供主机名（`host`）、用户名（`user`）、密码（`password`）和数据库名（
          `database`）等参数。
        - 通过`with`语句创建游标对象（`cursor`），这样可以确保游标在使用后自动关闭。
        - 执行SQL查询语句（`SELECT * FROM your_table`），可以根据实际需求修改查询语句。
        - 使用`fetchall`方法获取查询结果，这里返回的是一个包含所有行的元组列表，然后遍历并打印结果。
        - 如果查询过程中出现错误，会捕获`MySQLError`异常并打印错误信息。
        - 最后，无论是否出现错误，都会关闭数据库连接。
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
    - 这个示例用于向数据库表中插入数据：
        - 连接数据库的步骤与查询示例相同。
        - 定义插入数据的SQL语句，注意在语句中使用`%s`作为占位符，这是`pymysql`推荐的防止SQL注入的方式。
        - 定义要插入的值，这里是一个包含两个元素的元组`('value1', 'value2')`，可以根据表的列数和实际要插入的值进行调整。
        - 执行插入操作，将SQL语句和值作为参数传递给`cursor.execute`方法。
        - 插入数据后必须提交事务，通过`connection.commit()`来完成。
        - 最后关闭数据库连接。

## 四、常见注意事项

1. **SQL注入防范**
    - 在构建SQL语句时，应该避免直接拼接用户输入的内容，尽量使用参数化查询（如上面示例中使用`%s`
      作为占位符）。如果直接拼接用户输入，恶意用户可能会通过构造特殊的输入来修改SQL语句的原意，导致数据泄露或数据损坏等安全问题。
2. **数据库连接管理**
    - 连接数据库是一个比较耗费资源的操作，不应该频繁地创建和销毁连接。在实际应用中，可以考虑使用连接池来管理数据库连接，提高性能。
      `pymysql`本身没有内置连接池功能，但可以结合其他第三方库（如`DBUtils`）来实现连接池。
3. **字符编码问题**
    - 确保数据库、表和列的字符编码设置与Python程序中的编码一致。如果编码不一致，可能会导致数据存储或读取时出现乱码现象。通常，在连接数据库时可以通过
      `charset`参数指定字符编码，例如`connection = pymysql.connect(..., charset='utf8')`。
4. **事务处理**
    - 对于涉及多个SQL操作的事务，如插入多条数据或者更新和删除操作的组合，要确保正确地使用事务处理机制。如果一个事务中的某个操作失败，应该及时回滚事务，避免数据不一致。在
      `pymysql`中，可以通过`connection.rollback()`方法来回滚事务。
