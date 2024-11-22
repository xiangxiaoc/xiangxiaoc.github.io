---
date: 2022-01-09
category: Go
tag:
  - Go软件包
---

# Go 工程中的实践

Go 项目流行的目录布局

[https://github.com/golang-standards/project-layout/blob/master/README_zh.md](https://github.com/golang-standards/project-layout/blob/master/README_zh.md)

一个 Go 的工程当然是一个文件夹里面放了一堆 .go 的文件。

如果在工程的根目录执行 `go mod init` 生成 go.mod 文件，那就是把 **整个工程定义为一个 Go 模块（Module）**。

工程里面的每一个子目录下只要放了 go.mod 就又定义了一个模块，一个 Go 工程里可以有多个模块

工程跟目录的 go.mod

```go
module github.com/xiangxiaoc/golearn-module-package

go 1.17

require github.com/armstrongli/go-bmi v0.0.1

replace (
	github.com/armstrongli/go-bmi v0.0.1 => ./my_bmi
)
```

定义了模块，也就给模块里的 .go 文件里的 import 提供了支持，上述 mod 文件里还允许将某个模块实际指向本地的某个模块目录（这样就可以在自己的工程里，先拉下来依赖的源码，再改写源码）

在模块目录及子目录内使用 go get 就能 add 第三方模块（系统未安装则自动 download），在模块范围内的任意 .go 文件都能 import
这些门模块里的软件包。除非这个 go 工程内的某一级子目录内又有一个 go.mod 文件，则它将它这个目录及它的字母定义为一个新模块，而且还不继承上层目录的
go.mod 内容，是个完全独立的模块。

## Go package

包是包，模块是模块。一个模块里没有可以有多个包，包放在模块下的一个目录也行，目录的子目录也行，包括模块的根目录也行。

反正只要每个 .go 文件里都申明了自己是属于哪个包的，就放在同一文件夹里就好了，最好文件夹名就是包名，这样 import
一堆路径（模块地址/一级/一级的/包路径）的时候，最后那个目录就是包名。

### 导包思考

这个问题不思考清楚，写代码无从下手

两种情况：

内层包需要导入外层包

1.

外层包定义接口：[https://github.com/golang/go/blob/master/src/encoding/encoding.go](https://github.com/golang/go/blob/master/src/encoding/encoding.go)

