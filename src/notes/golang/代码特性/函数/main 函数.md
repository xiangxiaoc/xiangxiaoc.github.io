---
date: 2022-01-09
category: Go

---

# main 函数

+ 每个 Go 语言都应该有个 main package
+ main package 里的 main 函数是 Go 语言程序入口

```go
package main

import "os"

func main() {
	args := os.Args
	if len(args) != 0 {
		println("Do not accept any argument")
		os.Exit(1) }
	println("Hello world") }
```

