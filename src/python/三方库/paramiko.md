---
date: 2022-01-09
category: python
tag:
  - ssh
---

# paramiko - 通过 ssh 协议执行命令

### 一、概述
`paramiko` 是Python中一个用于实现SSH2协议的库，通过它可以方便地在Python程序中进行远程服务器连接、执行命令、传输文件等操作，功能强大且应用广泛。

### 二、pip 安装

**使用 `pip` 安装 `paramiko`**：
   在命令行中输入以下命令来安装 `paramiko` 库：
```bash
pip install paramiko
```
等待安装过程完成，安装成功后，就可以在Python代码中导入并使用 `paramiko` 库了。

### 三、简单示例
以下是几个使用 `paramiko` 库常见操作的简单示例：

#### 1. 连接远程服务器并执行命令
```python
import paramiko

# 创建SSH对象
ssh = paramiko.SSHClient()

# 允许连接不在know_hosts文件中的主机
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# 连接服务器
ssh.connect(hostname='your_server_ip', port=22, username='your_username', password='your_password')

# 执行命令
stdin, stdout, stderr = ssh.exec_command('ls')
# 获取命令结果
result = stdout.read().decode('utf-8')
print(result)

# 关闭连接
ssh.close()
```
在上述示例中：
- 首先导入了 `paramiko` 库。
- 创建了 `SSHClient` 对象来代表SSH连接客户端。
- 通过 `set_missing_host_key_policy` 方法设置了自动添加未知主机密钥的策略（在实际更安全的场景中，可能需要更严谨地处理主机密钥验证）。
- 使用 `connect` 方法，传入服务器IP、端口、用户名和密码来建立与远程服务器的连接。
- 利用 `exec_command` 方法执行 `ls` 命令（这里可以替换为任何合法的服务器端命令），并获取命令执行后的标准输出结果，进行解码和打印。
- 最后关闭了SSH连接。

#### 2. 使用 `paramiko` 进行文件传输（上传文件示例）
```python
import paramiko

# 连接信息
transport = paramiko.Transport(('your_server_ip', 22))
transport.connect(username='your_username', password='your_password')

# 创建SFTP客户端对象
sftp = paramiko.SFTPClient.from_transport(transport)

# 本地文件路径和远程服务器文件路径
local_path = 'local_file.txt'
remote_path = '/home/user/remote_file.txt'

# 上传文件
sftp.put(local_path, remote_path)

# 关闭连接
sftp.close()
transport.close()
```
此示例展示了如何将本地文件上传到远程服务器：
- 先通过 `Transport` 类建立与服务器的传输通道，并进行连接认证。
- 然后基于传输通道创建 `SFTPClient` 对象用于文件传输操作。
- 指定本地文件路径和远程服务器上要存放文件的路径，使用 `put` 方法实现文件上传。
- 最后关闭SFTP客户端连接以及传输通道连接。

### 四、常见注意事项

#### 1. 主机密钥验证
- 在实际应用中，直接使用 `AutoAddPolicy` 自动添加未知主机密钥是不安全的，因为可能会遭遇中间人攻击等安全风险。更好的做法是手动验证主机密钥，可以将已知服务器的公钥保存下来，在连接时对比验证，例如使用 `paramiko.RejectPolicy()` 先拒绝未知主机密钥连接，然后手动处理验证逻辑，像对比 `known_hosts` 文件中的公钥等。

#### 2. 异常处理
- `paramiko` 相关操作可能会因为网络问题、认证失败、远程服务器故障等多种原因抛出异常，比如连接时可能出现 `paramiko.AuthenticationException`（认证异常）、`paramiko.SSHException`（SSH相关通用异常）等。所以在代码中应该合理地使用 `try...except` 语句块来捕获异常并进行相应的处理，避免程序因为这些异常而崩溃。

#### 3. 内存管理与资源释放
- 当创建了 `SSHClient`、`SFTPClient` 等对象以及建立的连接通道等，在使用完后一定要记得及时关闭（如调用 `close` 方法），否则可能会导致内存泄漏或者占用过多的系统资源，尤其是在长时间运行的程序或者频繁进行连接操作的场景中。

#### 4. 字符编码问题
- 在获取远程命令执行结果或者处理文件传输涉及文本内容时，要注意字符编码问题。通常远程服务器端的输出默认可能是某种编码格式（如 `utf-8`、`latin-1` 等），需要根据实际情况正确地进行解码操作，否则可能会出现乱码情况，像上面示例中执行命令获取结果时使用 `stdout.read().decode('utf-8')` 进行 `utf-8` 解码，要确保服务器输出是 `utf-8` 编码格式才行，如果不确定需要先确认服务器端的编码配置并相应调整解码方式。

