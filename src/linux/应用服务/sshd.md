---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 系统基础服务
---

# sshd

## 服务端启动命令 sshd

命令行远程服务

### [](#安装与启用)安装与启用

+ apt 包名：ssh
+ systemctl 服务名称：sshd

## [](#配置)配置

+ 主配置文件：/etc/ssh/sshd_config

### 配置文件常用参数

| 参数                                | 作用                    |
|-----------------------------------|-----------------------|
| Port 22                           | 默认的sshd服务端口           |
| ListenAddress 0.0.0.0             | 设定sshd服务器监听的IP地址      |
| Protocol 2                        | SSH协议的版本号             |
| HostKey /tc/ssh/ssh_host_key      | SSH协议版本为1时，DES私钥存放的位置 |
| HostKey /etc/ssh/ssh_host_rsa_key | SSH协议版本为2时，RSA私钥存放的位置 |
| HostKey /etc/ssh/ssh_host_dsa_key | SSH协议版本为2时，DSA私钥存放的位置 |
| PermitRootLogin yes               | 设定是否允许root管理员直接登录     |
| StrictModes yes                   | 当远程用户的私钥改变时直接拒绝连接     |
| MaxAuthTries 6                    | 最大密码尝试次数              |
| MaxSessions 10                    | 最大终端数                 |
| PasswordAuthentication yes        | 是否允许密码验证              |
| PermitEmptyPasswords no           | 是否允许空密码登录（很不安全）       |

## 客户端连接命令 ssh

## 远程登陆

```plain
# ssh 登陆
ssh USER@IP
# 生成密钥对
ssh-keygen
# 上传公钥 
ssh-cpoy-id IP
# 删除本地信任主机
ssh-keygen -R 192.168.3.126
```

### 参数

-o： 以 key=value 形式设置

```bash
# 跳过已知主机对端主机验证
ssh -o StrictHostKeyChecking=no root@127.0.0.1 ls
```

## sshconfig

```bash
cat | tee -a ~/.ssh/config <<EOF
Host *
	ServerAliveInterval 60
EOF
```

## 远程拷贝 scp

| 参数 | 作用             |
|----|----------------|
| -v | 显示详细的连接进度      |
| -P | 指定远程主机的sshd端口号 |
| -r | 用于传送文件夹        |
| -6 | 使用IPv6协议       |

```bash
# 本地当前目录 a.txt 拷贝到服务上的家目录下
scp a.txt $USER@IP:/home/$USER
# 服务器上家目录下的 b.txt 拷贝到本地当前目录下
scp $USER@IP:/home/$USER/b.txt .
```

###### [](#基于ssh协议的rsync)基于ssh协议的rsync

```bash
# 增量同步
rsync --rsh='ssh -p 22' -auzvP <user>@<host>:<path>/* .
# 完全同步
rsync --rsh='ssh -p 22' -auzvP --delete <user>@<host>:<path>/* .
```

### [](#ssh-自动断开连接)ssh 自动断开连接

```bash
cp sshd_config sshd_config.bak
# ClientAliveInterval 活跃间隔，单位：秒
sed -i "s/#ClientAliveInterval 0/ClientAliveInterval 60/g" sshd_config
# ClientAliveCountMax 计数
sed -i "s/#ClientAliveCountMax 3/ClientAliveCountMax 3/g" sshd_config
grep ClientAlive sshd_config
diff sshd_config sshd_config.bak
systemctl reload sshd
```

## [](#暴力破解)暴力破解

+ Medusa
+ Hydra

防暴力破解

+ fail2ban

