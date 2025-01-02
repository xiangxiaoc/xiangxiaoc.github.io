---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
---

# vsftpd - 安全 FTP 服务器

vsftpd（very secure ftp
daemon，非常安全的FTP守护进程）是一款运行在Linux操作系统上的FTP服务程序，不仅完全开源而且免费，此外，还具有很高的安全性、传输速度，以及支持虚拟用户验证等其他FTP服务程序不具备的特点。

### [](#安装与启用)安装与启用

+ yum、apt 包名：vsftpd
+ systemctl 服务名：vsftpd
+ yum 客户端包名：ftp

## [](#rhel-系配置)RHEL 系配置

+ 主配置文件：/etc/vsftpd/vsftpd.conf

##### [](#配置文件中常用的参数)配置文件中常用的参数

| 参数                           | 作用                        |
|------------------------------|---------------------------|
| listen=[YES                  | NO]                       | 是否以独立运行的方式监听服务 |
| listen_address=IP地址          | 设置要监听的IP地址                |
| listen_port=21               | 设置FTP服务的监听端口              |
| download_enable＝[YES         | NO]                       | 是否允许下载文件 |
| userlist_enable=[YES         | NO]    userlist_deny=[YES |NO] | 设置用户列表为“允许”还是“禁止”操作 |
| max_clients=0                | 最大客户端连接数，0为不限制            |
| max_per_ip=0                 | 同一IP地址的最大连接数，0为不限制        |
| anonymous_enable=[YES        | NO]                       | 是否允许匿名用户访问 |
| anon_upload_enable=[YES      | NO]                       | 是否允许匿名用户上传文件 |
| anon_umask=022               | 匿名用户上传文件的umask值           |
| anon_root=/var/ftp           | 匿名用户的FTP根目录               |
| anon_mkdir_write_enable=[YES | NO]                       | 是否允许匿名用户创建目录 |
| anon_other_write_enable=[YES | NO]                       | 是否开放匿名用户的其他写入权限（包括重命名、删除等操作权限） |
| anon_max_rate=0              | 匿名用户的最大传输速率（字节/秒），0为不限制   |
| local_enable=[YES            | NO]                       | 是否允许本地用户登录FTP |
| local_umask=022              | 本地用户上传文件的umask值           |
| local_root=/var/ftp          | 本地用户的FTP根目录               |
| chroot_local_user=[YES       | NO]                       | 是否将用户权限禁锢在FTP目录，以确保安全 |
| local_max_rate=0             | 本地用户最大传输速率（字节/秒），0为不限制    |

#### [](#登陆验证方式)登陆验证方式

##### [](#匿名用户)匿名用户

是一种最不安全的认证模式，任何人都可以无需密码验证而直接登录到FTP服务器

##### [](#本地用户)本地用户

是通过Linux系统本地的账户密码信息进行认证的模式，相较于匿名开放模式更安全，而且配置起来也很简单。但是如果被黑客破解了账户的信息，就可以畅通无阻地登录FTP服务器，从而完全控制整台服务器

##### [](#虚拟用户模式)虚拟用户模式

是这三种模式中最安全的一种认证模式，它需要为FTP服务单独建立用户数据库文件，虚拟出用来进行口令验证的账户信息，而这些账户信息在服务器系统中实际上是不存在的，仅供FTP服务程序进行认证使用。这样，即使黑客破解了账户信息也无法登录服务器，从而有效降低了破坏范围和影响

#### [](#匿名用户配置)匿名用户配置

| 参数                          | 作用                |
|-----------------------------|-------------------|
| anonymous_enable=YES        | 允许匿名访问模式          |
| anon_root=/var/ftp/pub      | 匿名用户的根目录          |
| anon_umask=022              | 匿名用户上传文件的umask值   |
| anon_upload_enable=YES      | 允许匿名用户上传文件        |
| anon_mkdir_write_enable=YES | 允许匿名用户创建目录        |
| anon_other_write_enable=YES | 允许匿名用户修改目录名称或删除目录 |

```plain
vim /etc/vsftpd/vsftpd.conf
```

```plain
anonymous_enable=YES
anon_root=/var/ftp/pub
anon_umask=022
anon_upload_enable=YES
anon_mkdir_write_enable=YES
anon_other_write_enable=YES
```

```plain
systemctl restart vsftpd
chmod o+w /var/ftp/pub
setsebool -P ftpd_anon_write=1
chcon -R -t public_content_rw_t /var/ftp/pub
firewall-cmd --permanent --add-service=ftp
firewall-cmd --reload
```

#### [](#本地用户配置)本地用户配置

| 参数                | 作用                                    |
|-------------------|---------------------------------------|
| local_enable=YES  | 允许本地用户模式                              |
| write_enable=YES  | 设置可写权限                                |
| local_umask=022   | 本地用户模式创建文件的umask值                     |
| userlist_deny=YES | 启用“禁止用户名单”，名单文件为 ftpusers 和 user_list |

#### [](#虚拟用户配置)虚拟用户配置

创建真实本地用户和准备好ftp存放文件的目录

```plain
# 不允许登陆到 shell
useradd -s /sbin/nologin ftpvuser
mkdir -p /var/ftp/vuser_root
chown ftpvuser:ftpvuser /var/ftp/vuser_root
chmod -Rf 755 /var/ftp/vuser_root
```

创建虚拟用户们的配置目录

```plain
mkdir /etc/vsftpd/vusers
```

```plain
vim /etc/vsftpd/vusers/user1
```

```plain
local_root=/var/ftp/vuser_root
#指定虚拟用户仓库的具路径
anonymous_enable=NO
#设定不允许匿名访问
write_enable=YES
#允许写的操作
local_umask=022
#上传文件的权限掩码
anon_upload_enable=NO
#不允许匿名上传
anon_mkdir_write_enable=NO
#不允许匿名用户建立目录
idle_session_timeout=300
#设定空闲链接超时时间
data_connection_timeout=1000
#设定单次传输最大时间
max_clients=0
#设定并发客户端的访问数量
max_per_ip=0
#设定客户端的最大线程数
local_max_rate=0
#设定用户的最大传输速率，单位b/s
```

```plain
vim /etc/vsftpd/vusers/user2
```

```plain
local_root=/var/ftp/vuser_root
#指定虚拟用户仓库的具路径
anonymous_enable=NO
#设定不允许匿名访问
write_enable=NO
#允许写的操作
local_umask=022
#上传文件的权限掩码
anon_upload_enable=NO
#不允许匿名上传
anon_mkdir_write_enable=NO
#不允许匿名用户建立目录
idle_session_timeout=300
#设定空闲链接超时时间
data_connection_timeout=1000
#设定单次传输最大时间
max_clients=0
#设定并发客户端的访问数量
max_per_ip=0
#设定客户端的最大线程数
local_max_rate=0
#设定用户的最大传输速率，单位b/s
```

新建 vuser 写入虚拟用户信息，等下加密用

```plain
vim /etc/vsftpd/vuser
```

```plain
user1
123
user2
321
```

用 `db_load` 通过 hash 加密 生成 vuser.db

```plain
db_load -T -t hash -f /etc/vsftpd/vuser /etc/vsftpd/vuser.db
```

新建一个用于虚拟用户认证的 PAM 文件 vsftpd

```plain
mv /etc/pam.d/vsftpd{,.bak}
vim /etc/pam.d/vsftpd
```

```plain
#%PAM-1.0
#####32位系统配置
#auth    sufficient      /lib/security/pam_userdb.so     db=/etc/vsftpd/xnpasswd
#account sufficient      /lib/security/pam_userdb.so     db=/etc/vsftpd/xnpasswd
#####64位系统配置
auth    sufficient      /lib64/security/pam_userdb.so     db=/etc/vsftpd/vuser
account sufficient      /lib64/security/pam_userdb.so     db=/etc/vsftpd/vuser
#以上两条是手动添加的，内容是对虚拟用户的安全和帐户权限进行验证。
#这里的auth是指对用户的用户名口令进行验证。
#这里的accout是指对用户的帐户有哪些权限哪些限制进行验证。
auth       required     pam_listfile.so item=user sense=deny file=/etc/vsftpd/ftpusers onerr=succeed
auth       required     pam_shells.so
auth       include      system-auth
account    include      system-auth
session    include      system-auth
session    required     pam_loginuid.so
```

修改 vsftpd 配置文件

```plain
vim /etc/vsftpd/vsftpd.conf
```

```plain
#启用虚拟用户
guest_enable=YES
#指定虚拟的宿主用户
guest_username=ftpvuser
#设定虚拟用户的权限符合他们的宿主用户
virtual_use_local_privs=YES
#设定虚拟用户个人vsftp的配置文件存放路劲。这个被指定的目录里，将被存放每个虚拟用户个性的配置文件，注意的地方是：配置文件名必须和虚拟用户名相同。
user_config_dir=/etc/vsftpd/vusers
#禁止反向域名解析，若是没有添加这个参数可能会出现用户登陆较慢，或则客户链接不上ftp的现象
reverse_lookup_enable=NO
```

```plain
systemctl restart vsftpd
```

+ 防火墙与SELiunx 策略

```plain
firewall-cmd --permanent --add-service=ftp
firewall-cmd --reload
# ftpd 完全控制
setsebool -P ftpd_full_access 1
```

## [](#主动模式)主动模式

```plain
port_enable=yes
connect_from_port_20=yes
```

### [](#ftp客户端关闭被动模式)ftp客户端关闭被动模式

```plain
ftp> passive
```

## [](#被动模式)被动模式

### [](#配置被动模式的随机端口范围)配置被动模式的随机端口范围

```plain
pasv_min_port=50000
pasv_max_port=60000
```

### [](#加载内核模块)加载内核模块

#### [](#临时)临时

modprobe nf_conntrack_ftp

#### [](#永久)永久

```plain
vim /etc/sysconfig/iptables-config
```

> IPTABLES_MODULES="nf_conntrack_ftp"
>

## [](#debian-系配置)Debian 系配置

+ 配置文件：/etc/vsftpd.conf
+ 匿名用户根目录：/srv/ftp (755 root:ftp)

### [](#ubuntu)Ubuntu

默认禁用 #write_enable=YES 需要注意打开

以下两条并没有深入验证，但可行

+ ftp 根目录 需要所属者组为 root:root 并且 other 不能有 w 权限
+ ftp /pub 目录 需要所属者组为 ftp:ftp

## [](#实践方案)实践方案

### [](#公司内部-ftp-服务器)公司内部 FTP 服务器

```plain
write_enable=YES
```

```plain
anonymous_enable=YES
anon_root=/mnt/data/Ftp_data
anon_umask=000
anon_upload_enable=YES
anon_mkdir_write_enable=YES
```

```plain
local_enable=YES
local_umask=022
```

