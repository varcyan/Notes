# Vue - Slot

## 编译作用域

>   父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。

### 单个slot

子组件 child

```html
<div>
  <h2>我是子组件的标题</h2>
  <slot>
  	只有在没有要分发的内容时才会显示。
  </slot>
</div>
```

父组件

```html
<div id="app">
  <h1>我是父组件的标题</h1>
  <child>
    <!-- 把这里注释起来的时候，会显示slot的内容
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p> 
    -->
  </child>
</div>
```

效果（没有分发内容的）

```html
<div id="app">
  <h1>我是父组件的标题</h1>
  <div>
    <h2>我是子组件的标题</h2>
      只有在没有要分发的内容时才会显示。
  </div>
</div>
```

效果（有分发内容的）

```html
<div id="app">
  <h1>我是父组件的标题</h1>
  <div>
    <h2>我是子组件的标题</h2>
	<p>这是一些初始内容</p>
    <p>这是更多的初始内容</p> 
  </div>
</div>
```

在应用中，可以在slot中写一些默认的内容，如果有自定义内容，作为分发内容写在父组件视图中的子组件内。

## 具名slot

`<slot>` 元素可以用一个特殊的属性 `name` 来配置如何分发内容。多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 `slot` 特性的元素。

仍然可以有一个匿名 slot ，它是**默认 slot** ，作为找不到匹配的内容片段的备用插槽（无论是否被分隔开）。如果没有默认的 slot ，这些找不到匹配的内容片段将被抛弃。

假定我们有一个 `app-layout` 组件，它的模板为：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

父组件模版：

```html
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>

  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>

  <p slot="footer">这里有一些联系信息</p>
</app-layout>
```

渲染结果为：

```html
<div class="container">
  <header>
    <h1>这里可能是一个页面标题</h1>
  </header>
  <main>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
  </main>
  <footer>
    <p>这里有一些联系信息</p>
  </footer>
</div>
```

在组合组件时，内容分发 API 是非常有用的机制。

## 作用于插槽

作用域插槽是一种特殊类型的插槽，用作使用一个（能够传递数据到）可重用模板替换已渲染元素。

在子组件中，只需将数据传递到插槽，就像你将 prop 传递给组件一样：

```html
<div class="child">
  <slot text="hello from child"></slot>
</div>
```

在父级中，具有特殊属性 `scope` 的 `<template>` 元素，表示它是作用域插槽的模板。`scope` 的值对应一个临时变量名，此变量接收从子组件中传递的 prop 对象：

```html
<div class="parent">
  <child>
    <template scope="props">
      <span>hello from parent</span>
      <span>{{ props.text }}</span>
    </template>
  </child>
</div>
```

如果我们渲染以上结果，得到的输出会是：

```html
<div class="parent">
  <div class="child">
    <span>hello from parent</span>
    <span>hello from child</span>
  </div>
</div>
```