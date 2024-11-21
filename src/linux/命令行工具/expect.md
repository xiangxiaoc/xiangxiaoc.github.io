---
date: 2022-01-09
category: 命令行工具
tag:
  - Linux
  - 交互模式
  
---

# expect - 写脚本再也不怕交互式命令

先写一个 expect 脚本

```shell
#!/usr/bin/expect
#解释语言，这边运行要以./运行，bash运行会报错
spawn ssh root@192.168.0.14
#启动新的进程
expect "*password:"
#进程接收字符串，匹配
send "yxy7714707@\r"
#前面匹配到了就输入 “ ” 里的内容
expect "*#"
send "ifconfig>>123.txt\r"
send "exit\r"
interact
```

本地测试，检验最终是否生成了 /tmp/b

```shell
touch a 
host=127.0.0.1
user=$(whoami)
password='m^^9GzkO\$Td1&HVI' # 如果密码含有 $，需要用 \ 转义
expect <<EOF
	set timeout 3
	spawn scp a ${user}@${host}:/tmp/b
	expect {
		"connecting (yes" { send "yes\n"; exp_continue; }		
    timeout { send_error "Not match connecting (yes. Skip.\n"; }
	}
  expect {
  	"password:" { send "$password\n";}
    timeout { send_error "Not match password. EXIT 1\n"; exit 1; }
  }
  
	expect eof
EOF
```

移除已知主机地址，为了模拟新机器重新测试

```shell
ssh-keygen -f "$HOME/.ssh/known_hosts" -R "127.0.0.1"
```

或者可以跳过已知主机检查

```shell
touch a 
host=127.0.0.1
user=$(whoami)
password='m^^9GzkO\$Td1&HVI' # 如果密码含有 $，需要用 \ 转义
expect <<EOF
	set timeout 3
	spawn scp -o StrictHostKeyChecking=no a ${user}@${host}:/tmp/b
  expect {
  	"password:" { send "$password\n";}
    timeout { send_error "Not match password. EXIT 1\n"; exit 1; }
  }
  
	expect eof
EOF
```

参阅：
- <https://blog.51cto.com/u_13620944/2440856>
- <https://blog.csdn.net/anqixiang/article/details/110181689>
- <https://blog.csdn.net/Sudley/article/details/92714553>
