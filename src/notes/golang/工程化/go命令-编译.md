---
date: 2022-01-09
category: Go
tag:
  - go命令
---

# go命令-编译

```bash
# 查看支持的系统及 CPU 架构
cat /usr/local/go/src/go/build/syslist.go

# 设置操作系统及 cpu 架构
GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build

# 指定二进制文件输出目录
go build -o /bin/mybinary main.go
```

Windows Powershell

```powershell
$env:GOOS="linux"
$env:GOARCH="amd64"
$env:CGO_ENABLED=0
go build -o app main.go
```

# 内存逃逸分析
```go
go run -gcflags="-m" ./test.go
```

