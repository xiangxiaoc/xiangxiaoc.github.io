---
date: 2022-01-09
category: python
tag:
  - 并发编程
---

# ThreadPoolExecutor - 线程池执行器

线程池执行器

## 最简示例
```python
import time
from concurrent.futures import ThreadPoolExecutor

start_time = time.time()

pool = ThreadPoolExecutor()


def read_api():
    time.sleep(2)
    return "api result"


def read_db():
    time.sleep(3)
    return "db result"


read_api_task = pool.submit(read_api)
read_db_task = pool.submit(read_db)

print(read_api_task.result()) # .result() 接受线程函数的返回值，并发挥阻塞的作用
print(read_db_task.result())

print(f'{time.time() - start_time}')  # 差不多 3 秒

```

flask

```python
import json
import time
from concurrent.futures import ThreadPoolExecutor

from flask import Flask, jsonify

app = Flask(__name__)
pool = ThreadPoolExecutor()


def read_api():
    time.sleep(0.3)
    return "api result"


def read_db():
    time.sleep(0.3)
    return "db result"


@app.route('/')
def hello_world():  # put application's code here
    read_api_task = pool.submit(read_api)
    read_db_task = pool.submit(read_db)
    return jsonify({
        'read_api': read_api_task.result(),
        'read_db': read_db_task.result()
    })


@app.route('/healthz')
def healthz():
    return json.dumps({})


if __name__ == '__main__':
    app.run()

```

