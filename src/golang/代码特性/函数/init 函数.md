---
date: 2022-01-09
category: Go

---

# init 函数

+ 会在包初始化时运行
+ 最多只会被执行一次：依赖A，B项目，B项目也依赖A项目，但A项目里的 init 函数只会被执行一次

```go
package main

var myVariable = 0

func init() {
	myVariable = 1
	println(myVariable)
}

func main() {
	println(myVariable)
}

```

