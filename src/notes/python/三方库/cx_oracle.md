---
date: 2022-01-09
category: python
tag:
  - 数据库
---

# cx_Oralce - 操作 Oracle 数据库

## 一、概述
`cx_Oracle`是一个用于Python语言与Oracle数据库进行交互的强大第三方库。它提供了高效的方式来连接Oracle数据库，执行SQL语句（包括查询、插入、更新和删除等操作），并且能够处理数据库返回的结果集。通过`cx_Oracle`，开发者可以在Python应用程序中充分利用Oracle数据库的功能。

## 二、pip安装
1. **检查必要的依赖**
   - 首先，确保系统已经安装了Oracle客户端库。`cx_Oracle`需要依赖Oracle客户端库来与数据库进行通信。不同的操作系统有不同的安装方式，例如在Linux系统中，可能需要安装`oracle - instantclient - basic`等相关软件包；在Windows系统中，需要下载并安装Oracle Instant Client。
2. **安装cx_Oracle**
   - 安装`cx_Oracle`，在命令行中执行`pip install cx_Oracle`。等待安装完成后，就可以在Python代码中使用该库了。

## 三、简单示例
1. **连接Oracle数据库并查询数据**
   ```python
   import cx_Oracle

   # 连接数据库信息
   connection_string = "user/password@host:port/service_name"
   try:
       # 建立连接
       connection = cx_Oracle.connect(connection_string)
       # 创建游标
       cursor = connection.cursor()
       # 执行SQL查询语句
       sql_query = "SELECT * FROM your_table"
       cursor.execute(sql_query)
       # 获取查询结果
       results = cursor.fetchall()
       for row in results:
           print(row)
       # 关闭游标和连接
       cursor.close()
       connection.close()
   except cx_Oracle.Error as error:
       print("数据库操作出错: ", error)
   ```
2. **插入数据示例**
   ```python
   import cx_Oracle

   # 连接数据库信息
   connection_string = "user/password@host:port/service_name"
   try:
       # 建立连接
       connection = cx_Oracle.connect(connection_string)
       # 创建游标
       cursor = connection.cursor()
       # 插入数据的SQL语句
       sql_insert = "INSERT INTO your_table (column1, column2) VALUES (:value1, :value2)"
       values = {'value1': 'data1', 'value2': 'data2'}
       cursor.execute(sql_insert, values)
       # 提交事务
       connection.commit()
       # 关闭游标和连接
       cursor.close()
       connection.close()
   except cx_Oracle.Error as error:
       print("插入数据出错: ", error)
   ```
