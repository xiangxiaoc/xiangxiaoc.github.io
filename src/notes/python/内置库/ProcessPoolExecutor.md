---
date: 2022-01-09
category: python
tag:
  - 并发编程
---

# ProcessPoolExecutor - 进程池

```python
"""
进程池 Demo
"""
import os
import time
from concurrent.futures import ProcessPoolExecutor, Future
from typing import NoReturn

pool = ProcessPoolExecutor(2)


def task(num) -> int:
    print(f'{os.getpid()}: 任务 {num} 开始')
    time.sleep(1)
    return num * 1000


def call_back(f: Future) -> NoReturn:
    results.append(f.result())


if __name__ == '__main__':
    print(f"{os.getpid()}: 主进程开始")
    start = time.time()
    results = []
    for i in range(10):
        future: Future = pool.submit(task, i)
        future.add_done_callback(call_back)
    # 等待线程池中的所有任务执行完成之前阻塞
    # 如果需要等所有任务执行完，然后再一次性获取所有任务的返回结果时可以这样用
    pool.shutdown()

    print(f"结果集：{results}")

    end = time.time()
    print(f"{os.getpid()}: 主进程执行了 {end - start:.5f}秒")

```

