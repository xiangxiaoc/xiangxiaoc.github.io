---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 网络文件系统
---

# samba - 微软的网络文件系统

微软公司和英特尔公司共同制定了SMB（Server Messages Block，服务器消息块）协议，Samba服务程序现在已经成为在Linux系统与Windows系统之间共享文件的最佳选择。

### [](#安装与启用)安装与启用
+ yum、apt 包名：samba
+ RHEL 系 systemctl 服务名：smb
+ RHEL 系 客户端包名：samba-client cifs-utils
+ Debain 系 systemctl 服务名：smbd
+ apt 客户端包名：smbclient cifs-utils

## [](#rhel-系配置)RHEL 系配置
##### [](#防火墙)防火墙
```plain
firewall-cmd --permanent --add-service=samba
firewall-cmd --reload
```

+ 主配置文件：/etc/samba/smb.conf

配置文件讲解

```plain
[global]		#全局参数。
        workgroup = MYGROUP	#工作组名称
        server string = Samba Server Version %v	    #服务器介绍信息，参数%v为显示SMB版本号
        log file = /var/log/samba/log.%m	#定义日志文件的存放位置与名称，参数%m为来访的主机名
        max log size = 50	#定义日志文件的最大容量为50KB
        security = user	#安全验证的方式，总共有4种
        #share：来访主机无需验证口令；比较方便，但安全性很差
        #user：需验证来访主机提供的口令后才可以访问；提升了安全性
        #server：使用独立的远程主机验证来访主机提供的口令（集中管理账户）
        #domain：使用域控制器进行身份验证
        passdb backend = tdbsam	#定义用户后台的类型，共有3种
        #smbpasswd：使用smbpasswd命令为系统用户设置Samba服务程序的密码
        #tdbsam：创建数据库文件并使用pdbedit命令建立Samba服务程序的用户
        #ldapsam：基于LDAP服务进行账户验证
        load printers = yes	#设置在Samba服务启动时是否共享打印机设备
        cups options = raw	#打印机的选项
[homes]		#共享参数
        comment = Home Directories	#描述信息
        browseable = no	#指定共享信息是否在“网上邻居”中可见
        writable = yes	#定义是否可以执行写入操作，与“read only”相反
[printers]		#打印机共享参数
        comment = All Printers	
        path = /var/spool/samba	#共享文件的实际路径(重要)。
        browseable = no	
        guest ok = no	#是否所有人可见，等同于"public"参数。
        writable = no	
        printable = yes
```

### [](#快速配置)快速配置
```plain
# 备份配置文件
mv /etc/samba/smb.conf{,.bak}
# 过滤无效行
cat /etc/samba/smb.conf.bak | grep -v "#" | grep -v ";" | grep -v "^$" > /etc/samba/smb.conf
```

```plain
vim /etc/samba/smb.conf
```

```plain
# 共享名称
[samba_share]	
# 警告用户不要随意修改数据库
comment = Do not arbitrarily modify the database file
# 指定路径
path = /mnt/samba_data
# 关闭“所有人可见”
public = no
# 允许写入操作
writable = yes
```

```plain
mkdir /mnt/samba_data
chmod -R 777 /mnt/samba_data
chcon -R -t samba_share_t /mnt/samba_data
```

```plain
pdbedit -a -u root
```

```plain
# 测试一下是否成功共享
smbclient -L //127.0.0.1 -U root
```

可选：添加家目录 SELinux 策略

```plain
setsebool -P samba_enable_home_dirs on
```

```plain
systemctl restart smb
systemctl enable smb
```

#### [](#linux-客户端挂载)Linux 客户端挂载
```plain
vim ~/auth.smb
```

```plain
username=root
password=123
domain=MYGROUP
```

```plain
chmod -Rf 600 ~/auth.smb
```

```plain
mkdir /mnt/data
chmod 777 /mnt/data
# //IP/[samba服务配置文件里的标识名，而不是实际路径]
sed -i "$ a //192.168.1.70/samba_share /mnt/data cifs credentials=/root/auth.smb 0 0" /etc/fstab
mount -a
```

## [](#debain-系配置)Debain 系配置
+ 主配置文件：/etc/samba/smb.conf

待补充

