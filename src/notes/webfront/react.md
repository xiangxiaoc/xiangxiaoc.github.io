---
icon: /assets/icon/smarty.png
date: 2025-09-02
category: web前端
tag:
  - web
  - 前端
---

# React - 用类定义组件的 web UI 框架

我直观的感受，工程化的 vue 里一个 .vue 文件即一个组件，而 react 里一个 .js 文件里可以定义多个 class，多个组件

所以 vue 更框架化，react 面向对象的思维更多

## jsx 写 react 文件的必学基础

react 的 js 文件内写的不是原生 js 语法，没写过 jsx 的同学，可能会看到不能理解的语法，比如:

```jsx
return (
    <div className={isHidden ? "hidden" : "show"}>
        <h1 className="header" style={{color: "red", backgroundColor: "blue"}}>Hello, world</h1>
        <button onClick={alert("Click me")}>Click me</button>
    </div>
)
```

JSX 规则：
- 语法糖本质：JSX = React.createElement() 的语法糖，它就是 JS。
- 动态值怎么弄：用 {} 嵌入任何 JS 表达式。
- JSX 是值：可以赋值、传递、返回。
- 属性名改写注意：写 className，不是 class。事件名是 onClick，不是 onclick。
- 只能有一个根元素：多个标签并列时，用 `<div></div>` 或其他标签包起来。
- 标签闭合：所有标签都必须有结束符，如 `<br />`。

## 组件实例三大属性

### state

```jsx
class MyComponent extends React.Component {
    state = {
        name: "MyComponent"
    }
    
    render() {
        return <h2>Hello, {this.state.name}</h2>
    }
}
```

### prop

```jsx
class MyComponent extends React.Component {
    render() {
        console.log(this.props)
        return <h2>Hello, {this.props.name}</h2>
    }
}

ReactDom.render(<MyComponent name="MyComponent" />, document.getElementById("root"))
```

### ref

使用回调函数，react 将节点作为参数传入函数
```jsx
class MyComponent extends React.Component {
    // this.input1 由回调函数里的逻辑赋值
    showData = () => {
        const {input1} = this
        alert(input1.value)
    }
    
    render() {
        return (
            <div>
                <input ref={c => this.input1 = c} type="text" placeholder="点击按钮显示文本框数据" />
                <button onClick={this.showData}>点击按钮显示文本框数据</button>
            </div>
        )
    }
}
```
避免重复调用，不使用内联回调函数
```jsx
class MyComponent extends React.Component {
    // this.input1 由回调函数里的逻辑赋值
    showData = () => {
        const {input1} = this
        alert(input1.value)
    }
    
    // 抽出内联函数
    saveInput = c => this.input1 = c

    render() {
        return (
            <div>
                <input ref={c => this.input1 = c} type="text" placeholder="点击按钮显示文本框数据" />
                <button onClick={this.showData}>点击按钮显示文本框数据</button>
            </div>
        )
    }
}
```
使用 createRef() API
```jsx
class MyComponent extends React.Component {
    // this.input1 由回调函数里的逻辑赋值
    showData = () => {
        const {input1} = this
        alert(input1.value)
    }
    
    inputRef = React.createRef()

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" placeholder="点击按钮显示文本框数据" />
                <button onClick={this.showData}>点击按钮显示文本框数据</button>
            </div>
        )
    }
}
```