---
date: 2022-01-09
category: Go
tag:
  - go命令
---

# go命令-环境变量

查看现在 go 加载的环境变量

```bash
go env
```

## 其中重点的变量

GO111MODULE：控制是否启用 go mode，默认不用管，值为 on 或 off

<span style="color:rgb(51, 51, 51);">
用环境变量 </span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
GO111MODULE</span><span style="color:rgb(51, 51, 51);">
开启或关闭模块支持，它有三个可选值：</span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
off</span><span style="color:rgb(51, 51, 51);">、</span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
on</span><span style="color:rgb(51, 51, 51);">、</span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
auto</span><span style="color:rgb(51, 51, 51);">
，默认值是 </span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
auto</span><span style="color:rgb(51, 51, 51);">。</span>

+ <span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
  GO111MODULE=off</span><span style="color:rgb(51, 51, 51);"> 无模块支持，go 会从 GOPATH 和 vendor 文件夹寻找包。</span>
+ <span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
  GO111MODULE=on</span><span style="color:rgb(51, 51, 51);"> 模块支持，go 会忽略 GOPATH 和 vendor
  文件夹，只根据 </span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
  go.mod</span><span style="color:rgb(51, 51, 51);"> 下载依赖。</span>
+ <span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
  GO111MODULE=auto</span><span style="color:rgb(51, 51, 51);">
  在 </span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">$
  GOPATH/src</span><span style="color:rgb(51, 51, 51);">
  外面且根目录有 </span><span style="color:rgb(232, 62, 140);background-color:rgb(246, 246, 246);">
  go.mod</span><span style="color:rgb(51, 51, 51);"> 文件时，开启模块支持。</span>

GOROOT：安装路径，一般安装完之后不用配置

GOPATH：关键，设置为自己的 golang 的项目放置路径

GOPROXY：推荐使用“https://goproxy.cn”

GOPRIVATE：指向自己的私有库，比如说自己公司的私有库

# 设置 go 用到的环境变量

## Mac

通过 ~/.zshrc 文件，用户打开 zsh 时自动执行

```bash
echo "export GO111MODULE=on" >> ~/.zshrc
echo "export GOPROXY=https://goproxy.cn" >> ~/.zshrc
source ~/.zshrc
```

## Linux

通过 ~/.bashrc 文件，用户打开 bash 时自动自行

```bash
echo "export GO111MODULE=on" >> ~/.bashrc
echo "export GOPROXY=https://goproxy.cn" >> ~/.bashrc
source ~/.bashrc
```

## Windows

通过 PowerShell 里的 System.Enviroment 类的方法

```powershell
# 系统级
[System.Environment]::SetEnvironmentVariable("GO111MODULE","on","Machine")
[System.Environment]::SetEnvironmentVariable("GOPROXY","https://goproxy.cn","Machine")
[System.Environment]::GetEnvironmentVariable("GO111MODULE","Machine")
[System.Environment]::GetEnvironmentVariable("GOPROXY","Machine")

# 用户级
[System.Environment]::SetEnvironmentVariable("GO111MODULE","on","User")
[System.Environment]::SetEnvironmentVariable("GOPROXY","https://goproxy.cn","User")
[System.Environment]::GetEnvironmentVariable("GO111MODULE","User")
[System.Environment]::GetEnvironmentVariable("GOPROXY","User")
```

需要关闭终端，重新打开生效

