---
date: 2026-03-02
category: mysql
tag:
  - 数据库
---

# 常用SQL

```mysql
-- 查看每个数据库的大小
SELECT 
    table_schema AS '数据库',
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS '大小(MB)',
    ROUND(SUM(data_length) / 1024 / 1024, 2) AS '数据大小(MB)',
    ROUND(SUM(index_length) / 1024 / 1024, 2) AS '索引大小(MB)',
    COUNT(*) AS '表数量'
FROM information_schema.TABLES 
WHERE table_schema IN ('table_name')
GROUP BY table_schema
ORDER BY SUM(data_length + index_length) DESC;

-- 查看每个表的最后更新时间
SELECT 
    table_schema AS '数据库',
    table_name AS '表名',
    UPDATE_TIME AS '最后更新时间',
    TABLE_ROWS AS '行数'
FROM information_schema.TABLES 
WHERE table_schema IN ('table_name')
  AND UPDATE_TIME IS NOT NULL
ORDER BY UPDATE_TIME DESC
LIMIT 20;

-- 查看数据库级别的最远更新时间
SELECT 
    table_schema AS '数据库',
    MAX(UPDATE_TIME) AS '最近更新时间',
    COUNT(*) AS '总表数',
    SUM(CASE WHEN UPDATE_TIME IS NULL THEN 1 ELSE 0 END) AS '从未更新表数'
FROM information_schema.TABLES 
WHERE table_schema IN ('table_name')
GROUP BY table_schema
ORDER BY MAX(UPDATE_TIME) DESC;
```