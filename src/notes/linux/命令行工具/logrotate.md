---
date: 2025-05-13
category: 命令行工具
tag:
  - Linux
  - 日志管理
---

# logrotate - 日志文件轮转

```shell
# 调试，并不会真正的运行
logrotate -d /etc/logrotate.conf
```

```text
compress                            #通过gzip 压缩转储以后的日志
nocompress                          #不做gzip压缩处理
copytruncate                        #用于还在打开中的日志文件，把当前日志备份并截断；是先拷贝再清空的方式，拷贝和清空之间有一个时间差，可能会丢失部分日志数据。
nocopytruncate                      #备份日志文件不过不截断
create mode owner group             #轮转时指定创建新文件的属性，如create 0777 nobody nobody
nocreate                            #不建立新的日志文件
delaycompress                      #和compress 一起使用时，转储的日志文件到下一次转储时才压缩
nodelaycompress                    #覆盖 delaycompress 选项，转储同时压缩。
missingok                          #如果日志丢失，不报错继续滚动下一个日志
errors address                     #专储时的错误信息发送到指定的Email 地址
ifempty                            #即使日志文件为空文件也做轮转，这个是logrotate的缺省选项。
notifempty                         #当日志文件为空时，不进行轮转
mail address                       #把转储的日志文件发送到指定的E-mail 地址
nomail                             #转储时不发送日志文件
olddir directory                   #转储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统
noolddir                           #转储后的日志文件和当前日志文件放在同一个目录下
sharedscripts                      #运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有配置这个，那么每个日志轮转后都会执行一次脚本
prerotate          endscript                #在logrotate转储之前需要执行的指令，例如修改文件的属性等动作；必须独立成行
postrotate         endscript                #在logrotate转储之后需要执行的指令，例如重新启动 (kill -HUP) 某个服务！必须独立成行
daily                              #指定转储周期为每天
weekly                             #指定转储周期为每周
monthly                            #指定转储周期为每月
rotate count                       #指定日志文件删除之前转储的次数，0 指没有备份，5 指保留5 个备份
dateext                            #使用当期日期作为命名格式
dateformat .%s                     #配合dateext使用，紧跟在下一行出现，定义文件切割后的文件名，必须配合dateext使用，只支持 %Y %m %d %s 这四个参数
size(或minsize) log-size           #当日志文件到达指定的大小时才转储，log-size能指定bytes(缺省)及KB (sizek)或MB(sizem).
当日志文件 >= log-size 的时候就转储。 以下为合法格式：（其他格式的单位大小写没有试过）
size = 5 或 size 5 （>= 5 个字节就转储）#满足size就滚动一次，size参数跟滚动周期参数：hourly、daily、monthly、yearly完全是互斥的。即一旦设置了size参数，滚动周期参数就自动无效了，只要每次执行logrotate指令时，日志文件大小超过size，就会触发一次滚动，没有滚动周期一说了
size = 100k 或 size 100k
size = 100M 或 size 100M
maxsize 100k    #一般用于多次轮询；当执行logrorate指令时，只要日志的大小超过100k，即使时间没到下一个滚动周期内，也会发生滚动。那么同一小时内0:00--0:59就会发生多次滚动。换句话说，如果demo.txt的大小一直没有达到maxsize，那么一个滚动周期就只会发生一次滚动，即当前滚动周期内第一次执行logrorate指令就会触发滚动。以后的59分钟都不会发生滚动。maxsize可以使滚动提前发生，再下一个滚动周期到来之前发生多次滚动。即每满足maxsize就滚动一次，不满足则滚动1次，（每个滚动周期内，n次或1次）
【maxsize size】： Log files are rotated when they grow bigger than size bytes even before the additionally specified time interval (daily, weekly, monthly, or yearly).  The related size  option is  similar except that it is mutually exclusive with the time interval options, and it causes log files to be rotated without regard for the last rotation time.  When maxsize is used, both the size and timestamp of a log file are considered.
minsize   100k     #一个滚动周期内只会发生一次滚动，在当前滚动周期后面的时间里，即使日志大小再次超过100k，也不会再发生滚动，即minsize不能使滚动提前发生。如果日志的大小一直没有达到minsize，那么这个滚动周期内是不会触发滚动的。即满足minsize则滚动一次，不满足则滚动0次，(每个滚动周期内，1次或0次)。
maxage  60     #自动删除掉超过maxage指定天数的切割后的归档文件，即最大保留60天；相对于rotate按文件数，它是以天数为单位的
```
