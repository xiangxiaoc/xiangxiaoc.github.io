---
date: 2022-01-09
category: 命令工具
tag:
  - Linux
  - 软件包管理
  - Debian
  - Ubuntu
---

# apt - Debian系包管理工具

## apt

- apt list --installed 查看本机已安装的包

## apt-get

- apt-get update 更新本地的包地址
- apt-get clean 清理所有的缓存文件
- apt-get install PACKAGE 安装指定的软件
- apt-get remove PACKAGE 卸载指定软件
- apt-get -purge remove PACKAGE 卸载软件包括其配置
- apt-get source PACKAGE 下载软件包源代码

### 常见问题

apt update 报 GPG Key 错误
```
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://repo.mysql.com/apt/ubuntu focal InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B7B3B788A8D3785C
W: Failed to fetch http://repo.mysql.com/apt/ubuntu/dists/focal/InRelease The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B7B3B788A8D3785C
W: Some index files failed to download. They have been ignored, or old ones used instead
```
运行命令添加 key
```shell
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys B7B3B788A8D3785C
```

## apt-cache

- apt-cache search PACKAGE 查找包含部分关键字的软件包
- apt-cache show PACKAGE 查看包的信息
- apt-cache policy PACKAGE 查看包的后选版本
- apt-cache depends PACKAGE 查看这个包的依赖、冲突、推荐和会替换的包
- apt-cache rdepends PACKAGE 查看有哪些包依赖这个包，前面有|表示本机已安装的包

## dpkg 离线包管理工具

- dpkg -i *.deb 安装一个Debian软件包
- dpkg -I *.deb 列出deb的信息
- dpkg -c *.deb 列出deb有哪些文件
- dpkg -r PACKAGE 移除一个已安装的包裹
- dpkg -P PACKAGE 完全清除一个已安装的包裹（包括配制文件）
- dpkg -L PACKAGE 列出已安装的包内所有文件清单，常用来找配置文件
- dpkg -s PACKAGE 显示已安装包裹的信息
- dpkg -S COMMAND_PATH 查询一个文件来源于哪个包，支持模糊匹配
- dpkg --configure PACKAGE 重新配置一个已经安装的包裹

```shell
which lsb_release | xargs dpkg -S
```