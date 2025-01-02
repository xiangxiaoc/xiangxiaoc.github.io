---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 系统基础服务
---

# NTP - 系统时间同步服务

同步本机时间

### [](#安装)安装
yum 包名称: ntp ntpdate

## [](#配置)配置
`/etc/chrony.conf`

```plain
server <time-server-host> iburst
```

```plain
# 修改配置后重启 ntp server
systemctl restart chronyd
# 开机自启
systemctl enable chronyd
```

### [](#ntpdate-工具)ntpdate 工具
```plain
# 立即更新本机时间
ntpdate -u <time-server-host>
# 调试查看连接并检测时间偏移
ntpdate -d <time-server-host>
```

##### [](#ntpq-p)ntpq -p
ntpq -p

+ remote: 响应这个请求的NTP服务器的名称。
+ refid: NTP服务器使用的上一级ntp服务器。
+ st: remote远程服务器的级别.由于NTP是层型结构,有顶端的服务器,多层的Relay Server再到客户端.所以服务器从高到低级别可以设定为1-16. 为了减缓负荷和网络堵塞,原则上应该避免直接连接到级别为1的服务器的.
+ when: 上一次成功请求之后到现在的秒数。
+ poll: 本地机和远程服务器多少时间进行一次同步(单位为秒). 在一开始运行NTP的时候这个poll值会比较小,那样和服务器同步的频率也就增加了,可以尽快调整到正确的时间范围，之后poll值会逐渐增大,同步的频率也就会相应减小
+ reach: 这是一个八进制值,用来测试能否和服务器连接.每成功连接一次它的值就会增加
+ delay: 从本地机发送同步要求到ntp服务器的round trip time
+ offset: 主机通过NTP时钟同步与所同步时间源的时间偏移量，单位为毫秒（ms）。offset越接近于0,主机和ntp服务器的时间越接近
+ jitter: 这是一个用来做统计的值. 它统计了在特定个连续的连接数里offset的分布情况. 简单地说这个数值的绝对值越小，主机的时间就越精确

## [](#服务端配置)服务端配置
ubuntu: /etc/ntp.conf

#### [](#允许的ntp-client网段)允许的NTP Client网段
restrict 10.138.0.0 mask 255.255.0.0 nomodify

