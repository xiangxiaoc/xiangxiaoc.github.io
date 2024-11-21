---
date: 2022-01-09
category: Go
tag:
  - 基本数据类型
---

# 切片 Slice

+ 切片是对数组一个连续片段的引用
+ 数组定义中不指定长度即为切片
    - var identifier []type
+ 切片在未初始化之前默认为 nil，长度为0
+ slice 不能比较，只能和空 nil 比较

![](https://cdn.nlark.com/yuque/0/2023/png/10370900/1682148316271-0281b329-317d-47e3-affe-4fabfe7c4cd1.png)

直接定义切片

```go
var slice1 = []int
```

从数组中获取切片

```go

func main() {
	myArray := [5]int{1, 2, 3, 4, 5}
	mySlice := myArray[1:3]
	fmt.Printf("mySlice %+v\n", mySlice)
	fullSlice := myArray[:]
	remove3rdItem := deleteItem(fullSlice, 2)
	fmt.Printf("remove3rdItem %+v\n", remove3rdItem)
}

// 实现根据索引值删除指定元素的方法
func deleteItem(slice []int, index int) []int {
	return append(slice[:index], slice[index+1:]...)
}
```

切片中分析决定 cap 的值，和决定 len 的值

```go
package main

import "fmt"

func main() {
	var nums = [6]int{1, 2, 3, 4, 5, 6}

	printNums(nums[3:4]) // 切第一下的时候决定 cap，切第二下的时候决定 len 
	printNums(nums[2:])
	printNums(nums[5:6])
	printNums(nums[5:5])
	printNums(nums[3:4])

}

func printNums(nums []int) {
	fmt.Printf("addr: %p, len: %d, cap: %d, nums: %v\n", nums, len(nums), cap(nums), nums)
}

```

# 引用带来的问题

```go
package test

import "testing"

func TestSlice(t *testing.T) {
	arr := [...]string{"a", "b", "c", "d"}
	sli1 := arr[:2]
	t.Log(sli1, len(sli1), cap(sli1))
	sli2 := arr[1:]
	t.Log(sli2, len(sli2), cap(sli2))
	sli1[1] = "x"
	t.Log(sli1, len(sli1), cap(sli1))
	t.Log(sli2, len(sli2), cap(sli2))
	t.Log(arr, len(arr), cap(arr))

}

```

# 性能考虑

```go
package main

import "fmt"

func main() {

	// 与其
	a := make([]int, 10)  // 相当于 make([]int, 10, 10)
	fmt.Printf("%#v %v %v\n", a, len(a), cap(a))

	// 不如这样使用
	b := make([]int, 0, 10)
	fmt.Printf("%#v %v %v\n", b, len(b), cap(b))

	b = append(b, 1)
	fmt.Printf("%#v %v %v\n", b, len(b), cap(b))

	b = append(b, 1)
	fmt.Printf("%#v %v %v\n", b, len(b), cap(b))

	b = append(b, 1)
	fmt.Printf("%#v %v %v\n", b, len(b), cap(b))

	b = append(b, 1)
	fmt.Printf("%#v %v %v\n", b, len(b), cap(b))
}

```

