---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - DNS
---

# BIND - DNS 服务器

Berkeley Internet Name Domain

### [](#安装与启用)安装与启用

+ yum 包名：bind （建议直接安装bind-chroot）
    - systemctl 服务名：named
+ apt 包名：bind9
    - systemctl 服务名：bind9

## [](#rhel-系配置)RHEL 系配置

+ /etc/named.conf
    - option {} - 全局选项
    - logging {} - 日志选项
    - zone "." IN {} - 解析

```plain
vim /etc/named.conf
```

```plain
options {
 # 监听本机所有 IP 地址
 listen-on port 53 { any; };
 listen-on-v6 port 53 { ::1; };
 directory "/var/named";
 dump-file "/var/named/data/cache_dump.db";
 statistics-file "/var/named/data/named_stats.txt";
 memstatistics-file "/var/named/data/named_mem_stats.txt";
 # 允许所有来源的 IP 请求 DNS 服务
 allow-query { any; };
```

#### [](#正向解析)正向解析

+ 第1步：编辑区域配置文件。该文件中默认已经有了一些无关紧要的解析参数，旨在让用户有一个参考。我们可以将下面的参数添加到区域配置文件的最下面，当然，也可以将该文件中的原有信息全部清空，而只保留自己的域名解析信息：

```plain
vim /etc/named.rfc1912.zones
```

```plain
zone "linuxprobe.com" IN {
# 定义为主服务器
type master;
file "linuxprobe.com.zone";
# 允许那个从服务器来更新本服务器的数据
allow-update {none;};
};
```

+
第2步：编辑数据配置文件。我们可以从/var/named目录中复制一份正向解析的模板文件（named.localhost），然后把域名和IP地址的对应数据填写数据配置文件中并保存。在复制时记得加上-a参数，这可以保留原始文件的所有者、所属组、权限属性等信息，以便让bind服务程序顺利读取文件内容：

```plain
cp -a /var/named/named.localhost /var/named/linuxprobe.com.zone
```

```plain
vim /var/named/linuxprobe.com.zone
```

```plain
@       IN SOA	linuxprobe.com.	root.linuxprobe.com.	(	
            0       ;serial	#更新序列号
            1D      ;refresh	#更新时间
            1H      ;retry	#重试延时
            1W      ;expire	#失效时间
            3H )   ;minimum	#无效解析记录的缓存时间
        NS	ns.linuxprobe.com.	;#域名服务器记录
ns      IN A	192.168.10.10	;#地址记录(ns.linuxprobe.com.)
        IN MX 10	mail.linuxprobe.com.	;#邮箱交换记录
mail	IN A	192.168.10.10	;#地址记录(mail.linuxprobe.com.)
www     IN A	192.168.10.10	;#地址记录(www.linuxprobe.com.)
bbs     IN A	192.168.10.20	;#地址记录(bbs.linuxprobe.com.)
```

#### [](#反向解析)反向解析

一般要配置邮件服务的时候会配合用到反向解析

+
第1步：编辑区域配置文件。在编辑该文件时，除了不要写错格式之外，还需要记住此处定义的数据配置文件名称，因为一会儿还需要在/var/named目录中建立与其对应的同名文件。反向解析是把IP地址解析成域名格式，因此在定义zone（区域）时应该要把IP地址反写，比如原来是192.168.10.0，反写后应该就是10.168.192，而且只需写出IP地址的网络位即可。把下列参数添加至正向解析参数的后面。

```plain
vim /etc/named.rfc1912.zones
```

```plain
zone "10.168.192.in-addr.arpa" IN {
type master;
# 实际路径 /var/named 下
file "192.168.10.arpa";
allow-update {none;};
};
```

+ 第2步：编辑数据配置文件。首先从/var/named目录中复制一份反向解析的模板文件（named.loopback），然后把下面的参数填写到文件中。其中，IP地址仅需要写主机位

```plain
cp -a /var/named/named.loopback /var/named/192.168.10.arpa
```

```plain
vim /var/named/192.168.10.arpa
```

```plain
$TTL 1D
@       IN SOA  linuxprobe.com. root.linuxprobe.com. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      ns.linuxprobe.com.
ns      A       192.168.10.10
10      PTR     ns.linuxprobe.com.
10      PTR     mail.linuxprobe.com.
10      PTR     www.linuxprobe.com.
20      PTR     bbs.linuxprobe.com.
```

```plain
systemctl restart named
firewall-cmd --permanent --add-port=53/tcp
firewall-cmd --permanent --add-port=53/udp
firewall-cmd --reload
```

### [](#从属服务器)从属服务器

+ 第1步：在主服务器的区域配置文件中允许该从服务器的更新请求，即修改allow-update {允许更新区域信息的主机地址;};参数，然后重启主服务器的DNS服务程序。

```plain
vim /etc/named.rfc1912.zones
```

```plain
zone "linuxprobe.com" IN {
type master;
file "linuxprobe.com.zone";
allow-update { 192.168.10.20; };
};
zone "10.168.192.in-addr.arpa" IN {
type master;
file "192.168.10.arpa";
allow-update { 192.168.10.20; };
};
```

```plain
systemctl restart named
firewall-cmd --permanent --add-port=53/tcp
firewall-cmd --permanent --add-port=53/udp
firewall-cmd --reload
```

+
第2步：在从服务器中填写主服务器的IP地址与要抓取的区域信息，然后重启服务。注意此时的服务类型应该是slave（从），而不再是master（主）。masters参数后面应该为主服务器的IP地址，而且file参数后面定义的是同步数据配置文件后要保存到的位置，稍后可以在该目录内看到同步的文件。

```plain
vim /etc/named.rfc1912.zones
```

```plain
zone "linuxprobe.com" IN {
type slave;
masters { 192.168.10.10; };
# 实际路径 /var/named 下
file "slaves/linuxprobe.com.zone";
};
zone "10.168.192.in-addr.arpa" IN {
type slave;
masters { 192.168.10.10; };
file "slaves/192.168.10.arpa";
};
```

```plain
systemctl restart named
ls /var/named/slaves
firewall-cmd --permanent --add-port=53/tcp
firewall-cmd --permanent --add-port=53/udp
firewall-cmd --reload
```

### [](#缓存服务器)缓存服务器

在 /etc/named.conf 里添加一行 `forwarders { DNS_IP; };` 之后重启即可

### [](#分离解析功能)分离解析功能

+
第1步：修改bind服务程序的主配置文件，把第11行的监听端口与第17行的允许查询主机修改为any。由于配置的DNS分离解析功能与DNS根服务器配置参数有冲突，所以需要把第51~
54行的根域信息删除。

```plain
vim /etc/named.conf
```

> ~~zone "." IN {

~~~~type hint;  
~~~~file "~~[~~named.ca~~](http://named.ca)~~";  
~~~~};~~
>

+ 第2步：编辑区域配置文件。把区域配置文件中原有的数据清空，然后按照以下格式写入参数。首先使用acl参数分别定义两个变量名称（china与american），当下面需要匹配IP地址时只需写入变量名称即可，这样不仅容易阅读识别，而且也利于修改维护。

```plain
vim /etc/named.rfc1912.zones
```

```plain
acl "china" { 122.71.115.0/24; };
acl "american" { 106.185.25.0/24; };
view "china" {
    match-clients { "china"; };
    zone "linuxprobe.com" {
        type master;
        file "linuxprobe.com.china";
    };
};
view "american" {
    match-clients { "american"; };
    zone "linuxprobe.com" {
        type master;
        file "linuxprobe.com.american";
    };
};
```

## [](#debian-系配置)Debian 系配置
+ /etc/bind/named.conf
+ /etc/bind/zones.rfc1918

待补充

## [](#其他相关知识)其他相关知识
#### [](#13台根dns服务器的具体信息)13台根DNS服务器的具体信息
| 名称 | 管理单位 | 地理位置 | IP地址 |
| --- | --- | --- | --- |
| A | [INTERNIC.NET](http://INTERNIC.NET) | 美国-弗吉尼亚州 | 198.41.0.4 |
| B | 美国信息科学研究所 | 美国-加利弗尼亚州 | 128.9.0.107 |
| C | PSINet公司 | 美国-弗吉尼亚州 | 192.33.4.12 |
| D | 马里兰大学 | 美国-马里兰州 | 128.8.10.90 |
| E | 美国航空航天管理局 | 美国加利弗尼亚州 | 192.203.230.10 |
| F | 因特网软件联盟 | 美国加利弗尼亚州 | 192.5.5.241 |
| G | 美国国防部网络信息中心 | 美国弗吉尼亚州 | 192.112.36.4 |
| H | 美国陆军研究所 | 美国-马里兰州 | 128.63.2.53 |
| I | Autonomica公司 | 瑞典-斯德哥尔摩 | 192.36.148.17 |
| J | VeriSign公司 | 美国-弗吉尼亚州 | 192.58.128.30 |
| K | RIPE NCC | 英国-伦敦 | 193.0.14.129 |
| L | IANA | 美国-弗吉尼亚州 | 199.7.83.42 |
| M | WIDE Project | 日本-东京 | 202.12.27.33 |


#### [](#解析记录分类)解析记录分类
+ A记录 域名→IP地址
+ CNAME记录 域名→其他域名
+ MX记录 域名→邮件域名→A记录IP地址
+ NS记录 域名→name server域名

