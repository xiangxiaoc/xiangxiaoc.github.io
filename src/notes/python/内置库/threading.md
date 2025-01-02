---
date: 2022-01-09
category: python
tag:
  - 并发编程
---

# threading - 内置线程模块

## 事件通知
多线程间阻塞，等待事件通知放通，再继续执行代码

```python
import time
from threading import Thread, Event, current_thread
from typing import NoReturn

door_is_open = Event()
passenger_get_in_bus = Event()


def subway() -> NoReturn:
    t = current_thread()
    log_prefix = f"[{t.name} daemon: {t.daemon}]: "
    print(f"{log_prefix}地铁到站了")
    time.sleep(1)
    print(f"{log_prefix}等待开门")
    time.sleep(1)
    door_is_open.set()
    print(f"")
    print(f"{log_prefix}等待乘客上车")
    passenger_get_in_bus.wait()
    print(f"{log_prefix}关门发车")


def passenger(name) -> NoReturn:
    t = current_thread()
    log_prefix = f"[{t.name} daemon: {t.daemon}]: "
    print(f"{log_prefix}乘客 {name} 正在等车...")
    door_is_open.wait()
    time.sleep(1)
    print(f"{log_prefix}乘客 {name} 上车了")


if __name__ == '__main__':
    b = Thread(target=subway, name='Thread-Bus')
    b.start()

    threads = []
    for i in range(1, 4):
        p = Thread(target=passenger, args=(i,))
        p.start()
        threads.append(p)

    for thd in threads:
        thd.join()

    passenger_get_in_bus.set()
    b.join()
    print("主线程结束")

```

