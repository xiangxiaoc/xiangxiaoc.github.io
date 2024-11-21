---
date: 2022-01-09
category: Shell
tag:
  - 语言特性
---

# EOF

运用 EOF 可以优雅地将带有换行格式的长文本粘贴到命令行终端，或在脚本中使输出保留缩进的格式

输出到标准输出

```plain
cat << EOF
    格式化文本
EOF
```

区分标签隔离内容

```plain
cat << EOF_a
    格式化文本
EOF_a
cat << EOF_b
    格式化文本
EOF_b
```

输出重定向到文件

重写

```plain
cat > FILE_NAME << EOF
    格式化文本
EOF
```

追加

```plain
cat >> FILE_NAME << EOF
    格式化文本
EOF
```

格式化文本中含有 ${VAR} 不需要 ${VAR} 被当作变量调用，加单引号，'EOF'

```plain
cat > <FILE_NAME> << 'EOF'
#!/bin/bash
${ABC} is great
EOF
```

根据参数动态批量增加端口

```bash
cat <<EOF | kubectl apply -f -
kind: Service
apiVersion: v1
metadata:
  name: ${name}
  namespace: metaverse
spec:
  type: NodePort
  ports:
    - port: $((port + 90))
      targetPort: $((port + 90))
      protocol: TCP
      nodePort: ${port}
      name: manage-web-port
    - port: $((port + 92))
      targetPort: $((port + 92))
      protocol: UDP
      nodePort: $((port + 2))
      name: server-udp-port
    - port: $((port + 92))
      targetPort: $((port + 92))
      nodePort: $((port + 2))
      name: server-tcp-port
$(
  for ((p = $((port + 10)); p <= $((port + 20)); p++)); do
    cat <<EOF_dynamic_port

    - name: udp-port-$p
      protocol: UDP
      port: $p
      targetPort: $p
      nodePort: $p
      
EOF_dynamic_port
  done
)
EOF
```

