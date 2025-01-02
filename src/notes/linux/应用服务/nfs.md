---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 网络文件系统
---

# NFS - 网络文件系统

Linux to Linux 的文件共享服务，默认端口 2049

### [](#安装与启用)安装与启用

+ yum 包名： nfs-utils （含客户端）
+ apt 包名： nfs-kernel-server
+ systemctl 服务名：nfs-server ( RHEL 5 6 需要开启 rpcbind 服务支持 )
+ apt 客户端包名：nfs-common

## [](#rhel-系配置)RHEL 系配置

#### [](#防火墙)防火墙

```plain
firewall-cmd --permanent --add-service=nfs
firewall-cmd --reload
```

#### [](#共享目录配置文件)共享目录配置文件

/etc/exports

```plain
<输出目录> [客户端1 选项（访问权限,用户映射,其他）] [客户端2 选项（访问权限,用户映射,其他）]
```

###### [](#客户端来源指定的几种方式)客户端来源指定的几种方式

+ 指定ip地址的主机：192.168.0.200
+ 指定子网中的所有主机：192.168.*
+ 指定域名的主机：[david.bsmart.cn](http://david.bsmart.cn)
+ 指定域中的所有主机：*.bsmart.cn
+ 所有主机：*

###### [](#选项参数)选项参数

| 参数             | 作用                                        |
|----------------|-------------------------------------------|
| ro             | 只读                                        |
| rw             | 读写                                        |
| root_squash    | 当NFS客户端以root管理员访问时，映射为NFS服务器的匿名用户         |
| no_root_squash | 当NFS客户端以root管理员访问时，映射为NFS服务器的root管理员      |
| all_squash     | 无论NFS客户端使用什么账户访问，均映射为NFS服务器的匿名用户          |
| sync           | 同时将数据写入到内存与硬盘中，保证不丢失数据                    |
| async          | 优先将数据保存到内存，然后再写入硬盘；这样效率更高，但可能会丢失数据        |
| secure         | 限制客户端只能从小于1024的tcp/ip端口连接nfs服务器（默认设置）     |
| insecure       | 允许客户端从大于1024的tcp/ip端口连接服务器                |
| wdelay         | 检查是否有相关的写操作，如果有则将这些写操作一起执行，这样可以提高效率（默认设置） |
| no_wdelay      | 若有写操作则立即执行，应与sync配合使用                     |
| subtree        | 若输出目录是一个子目录，则nfs服务器将检查其父目录的权限(默认设置)       |
| no_subtree     | 即使输出目录是一个子目录，nfs服务器也不检查其父目录的权限，这样可以提高效率   |

### [](#快速配置)快速配置

```plain
mkdir /mnt/nfs
chmod -R 777 /mnt/nfs
lan_ip=$(hostname -I | awk '{print $1}') 
src_ip=${lan_ip%.*}
echo "# nfs for $src_ip" >> /etc/exports
sed -i "$ a /mnt/data/nfs ${src_ip}.*(rw,sync,no_root_squash,insecure,no_subtree)" /etc/exports
systemctl restart nfs-server
systemctl enable nfs-server
```

查看已生效的配置

```plain
cat /var/lib/nfs/etab
```

查看哪些客户端正在挂载

```plain
cat /var/lib/nfs/rmtab
```

#### [](#客户端配置)客户端配置

##### [](#showmount-命令)showmount 命令

| 参数    | 作用                     |
|-------|------------------------|
| -e IP | 显示NFS服务器的共享列表          |
| -a    | 显示本机挂载的文件资源的情况NFS资源的情况 |
| -v    | 显示版本号                  |

```plain
mkdir /mnt/data/nfs_a
sed -i "$ a 192.168.1.70:/mnt/data/nfs /mnt/data/nfs_a nfs defaults 0 0" /etc/fstab
mount -a
```

