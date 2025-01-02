---
date: 2022-01-09
category: Go
tag:
  - 基本数据类型
---

# 字符串 string

```go
package test

import "testing"

func TestStringAndRune(t *testing.T) {
	a := "abc"
	t.Log(len(a), a[0])

	r := []rune(a)
	t.Log(len(r), r[0])

	r[0] = 98 // b 的 ASCII 码的十进制表示
	b := string(r)
	t.Log(len(b), b)

	r[1] = 'd' // 用单引号直接表示字符
	c := string(r)
	t.Log(len(c), c)

}

```

```go
package test

import "testing"

func TestStringAndRuneZhongwen(t *testing.T) {
	zhongwen := "中国"
	t.Logf("字节长度：%[1]d, 打印字符串的值（%%v）：%[2]v, UTF-8编码的十六进制表示（%%X）：%[2]X", len(zhongwen), zhongwen)
	for i, b := range zhongwen {
		t.Log("遍历后打印值就是打印 Unicode 的十进制了 ------------------------------------------------------")
		t.Logf("遍历 zhongwen 字符串， 索引：%d", i)
		t.Logf("b 的类型：%T", b)
		t.Logf("Unicode 的十进制（%%v）：%v", b)
		t.Logf("Unicode 的十六进制（%%X）：%X", b)
		t.Logf("Unicode 的 Unicode表示（%%U）：%U", b)
		t.Logf("unicode 使用 %%c 转字符看看是什么：%c", b)
	}

	t.Logf("\n转成 rune 数组之后，%%X %%U 都指的是 Unicode 的编码了 ============================")
	zhongwenRune := []rune(zhongwen)
	t.Logf("查看 zhongwenRune 的 长度 len： %d 发现是个 Unicode 的十进制表示的数组", len(zhongwenRune))
	t.Logf("查看 zhongwenRune 的 值（%%v）： %v 发现是个 Unicode 的十进制表示的数组", zhongwenRune)
	t.Logf("查看 zhongwenRune 的 Unicode（%%U）： %U", zhongwenRune)
	t.Logf("查看 zhongwenRune 的 十六进制（%%X）： %X", zhongwenRune)
	t.Logf("说明 rune 就是用 Unicode 编码存的，并且通过 len() 识别到了正确的【字符】数，比 len(string) 得到的字节数长度靠谱")

	for idx, unicode := range zhongwenRune {
		t.Logf("遍历 zhongwenRune %d ----------------------", idx)
		t.Logf("查看 unicode 的 十六进制（%%X）： %X", unicode)
		t.Logf("unicode 的类型：%T", unicode)
		t.Logf("使用 %%c 转字符看看是什么：%c", unicode)
	}

}

```

总结，字符串存中文时，一个汉字用3个字节表示，如果需要遍历，尽量先转 rune 对象之后再遍历，至少索引的值是常规从 0 到 1 到 2 ... 正常自增的，每一个汉字都是就是一个 unicode 对象，直接打印值 %v 就是十进制的 int32 

