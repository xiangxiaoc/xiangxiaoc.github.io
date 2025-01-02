---
date: 2022-01-09
category: Go
tag:
  - go命令
---

# go命令-测试

```go
package test

import (
	"strings"
	"testing"
)

func TestSplit(t *testing.T) {
	input := "1,2,3,4,5"
	expected := []string{"1", "2", "3", "4", "5"}
	actual := strings.Split(input, ",")
	for i := 0; i < len(actual); i++ {
		if actual[i] != expected[i] {
			t.Errorf("Test Failed: input:%v expected:%v actual:%v", input, expected[i], actual[i])
		}
	}
}

```

# 命令

```shell
go test -v -cover
```

# 断言

github.com/stretchr/testify/assert

```go
package test

import (
	"github.com/stretchr/testify/assert"
	"strings"
	"testing"
)

func TestSplit(t *testing.T) {
	input := "1,2,3,4,5"
	expected := []string{"1", "2", "3", "4", "5"}
	actual := strings.Split(input, ",")
	for i := 0; i < len(actual); i++ {
		if actual[i] != expected[i] {
			assert.Equal(t, expected[i], actual[i])
		}
	}
}

```

## 性能测试

测试代码文件还是以 _test.go 结尾

```go
package test

import (
	"bytes"
	"testing"
)

func BenchmarkConcatStringByAdd(b *testing.B) {
	elems := []string{"1", "2", "3", "4", "5"}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		ret := ""
		for _, elem := range elems {
			ret += elem
		}
	}
	b.StopTimer()
}

func BenchmarkConcatStringByBytesBuffer(b *testing.B) {
	elems := []string{"1", "2", "3", "4", "5"}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		var buf bytes.Buffer
		for _, elem := range elems {
			buf.WriteString(elem)
		}
	}
	b.StopTimer()
}

```

# 命令

```shell
go test benchmark_test.go -bench=. //所有方法
go test benchmark_test.go -bench=BenchmarkConcatStringByAdd // 单一方法

go test benchmark_test.go -bench=. -benchmem
```


