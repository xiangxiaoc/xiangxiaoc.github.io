---
date: 2022-01-09
category: python
tag:
  - YAML
---

# ruamel - YAML 处理

[https://yaml.readthedocs.io/en/latest/basicuse.html](https://yaml.readthedocs.io/en/latest/basicuse.html)

```bash
pip install ruamel.yaml
```

```python
from ruamel.yaml import YAML

path = './deployment.yaml'
y = YAML() # 实例化一个 YAML 对象

# yaml 文件转 YAML 对象
with open(path, 'r', encoding='utf-8') as f:
    deployment_yaml = y.load(f)

# YAML 对象增删改查
deployment_yaml['spec']['template']['spec']['containers'][0]['image'] = 'new_image'
deployment_yaml['spec']['template']['spec']['volumes'].append(
    {
        'name': 'wheat-log-volume', 
        'configMap': {
            'name': 'wheat-log'
        }
    }
)

# YAML 对象转 yaml 文件
with open(path, 'w', encoding='utf-8') as f:
    y.dump(deployment_yaml, f)

```

# 示例
[https://zhuanlan.zhihu.com/p/430255448](https://zhuanlan.zhihu.com/p/430255448)

