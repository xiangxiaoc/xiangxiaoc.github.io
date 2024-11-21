---
date: 2022-01-09
category: 应用服务
tag:
  - Linux
  - 虚拟卷
---

# LVM - 逻辑卷管理

| 功能/命令 | 物理卷管理     | 卷组管理      | 逻辑卷管理     |
|-------|-----------|-----------|-----------|
| 扫描    | pvscan    | vgscan    | lvscan    |
| 建立    | pvcreate  | vgcreate  | lvcreate  |
| 显示    | pvdisplay | vgdisplay | lvdisplay |
| 删除    | pvremove  | vgremove  | lvremove  |
| 扩展    |           | vgextend  | lvextend  |
| 缩小    |           | vgreduce  | lvreduce  |

#### [](#初始化物理卷为lvm所用)初始化物理卷为LVM所用

```plain
pvcreate /dev/sdb /dev/sdc
```

#### [](#创建卷组)创建卷组

```plain
vgcreate hddgroup /dev/sdb /dev/sdc
# 指定PE（一个单元）为16M
vgcreate -s 16M /dev/sde volume-group /dev/sde
```

#### [](#创建逻辑卷)创建逻辑卷

```plain
lvcreate -n data -L 3T hddgroup
lvcreate -n data1 -l 10 volume-group
```

#### [](#扩容逻辑卷)扩容逻辑卷

**注：卸载后操作**

```plain
lvextend -L 4T /dev/hddgroup/data
# 检查卷完整性
e2fsck -f /dev/hddgroup/data
# 重载硬盘容量信息
resize2fs /dev/hddgroup/data
```

#### [](#缩小逻辑卷)缩小逻辑卷

**注：卸载后操作**

```plain
# 检查卷完整性
e2fsck -f /dev/hddgroup/data
# 重载硬盘容量信息
resize2fs /dev/hddgroup/data 1T
lvreduce -L 1T /dev/hddgroup/data
```

#### [](#逻辑卷快照)逻辑卷快照

##### [](#生成)生成

必须和逻辑卷一样大的容量

```plain
lvcreate -L 1T -s -n SNAP /dev/hddgroup/data
```

##### [](#还原)还原

注：卸载后操作

```plain
lvconvert --merge /dev/hddgroup/SNAP
```

