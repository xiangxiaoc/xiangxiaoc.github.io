---
date: 2022-01-09
category: Go
tag:
  - 基本数据类型
---

# 映射 map

## 创建
```go
// 声明
myMap := map[string]int{"a": 1}
// 通过 make 构造空 map，提前告知容量
myMap := make(map[string]string, 10) // key 为字符串类型，value 为字符串类型的一个映射，容量为 10 （可选）

myFuncMap := map[string]func() int{
    "funcA": func() int { return 1 },
}
```

## 取值
```go
package test

import (
	"testing"
)

// 没 key 时取值
func TestMapNoKey(t *testing.T) {
	a := map[int]int{1: 2, 4: 5}
	if v, ok := a[0]; ok {
		t.Log(v)
	} else {
		t.Log("key not exist")
	}
}

// 遍历
func TestMapTraversal(t *testing.T) {
	a := map[int]int{1: 2, 3: 4}
	for k, v := range a {
		t.Log(k, v)
	}
}

```

## 实现 Set
```go
package test

import "testing"

func TestImpSet(t *testing.T) {
	mySet := map[int]bool{}
	// 单独给 set 加元素，key 就用来存元素
	mySet[1] = true
	mySet[50] = true

	//从给定的切片中遍历添加元素
	sli1 := []int{1, 2, 3, 4, 5}
	for _, ele := range sli1 {
		mySet[ele] = true
	}

	// 遍历自己做的集合
	for ele, _ := range mySet {
		t.Log(ele)
	}

	mySet[88] = false
	// 判断元素在不在集合中就是直接看 ok 是不是 true
	if _, ok := mySet[88]; ok {
		t.Log("有这个元素")
	} else {
		t.Log("没这个元素")
	}

	for ele, _ := range mySet {
		t.Log(ele)
	}

}

```

