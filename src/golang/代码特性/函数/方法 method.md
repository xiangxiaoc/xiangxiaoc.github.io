---
date: 2022-01-09
category: Go

---

# 方法 method

+ 方法就是多了个接受者的函数
    - func (recv receiver_type) Name(parametes) (return_values)
+ 使用场景：接受者是带有属性的对象，相当于传递对象给函数，可以直接访问对象的属性

```go
func (s *Server) StartTLS() {
    if s.URL != "" {
        panic("Server already started")
    }
    if s.client == nil {
        s.client == &http.Client{Transport: &http.Transport{}}
    }
}
```

