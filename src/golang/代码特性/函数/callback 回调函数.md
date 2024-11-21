---
date: 2022-01-09
category: Go

---

# callback 回调函数

+ 定义一个参数可以为函数的函数，适合参数数量固定，功能相近的函数



```go
package main

func add(a, b float32) {
	println(a + b)
}

func time(a, b float32) {
	println(a * b)
}

func doCalculate(a, b float32, f func(float32, float32)) {
	f(a, b)
}

func main() {
	doCalculate(1, 1, add)
	doCalculate(3, 3, time)
}

```

