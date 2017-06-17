# Vue - 组件

## 什么是组件？

组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

## 使用组件

### 注册

之前说过，我们可以通过以下方式创建一个 Vue 实例：

```
new Vue({
  el: '#some-element',
  // 选项
})
```

要注册一个全局组件，你可以使用 `Vue.component(tagName, options)`。 例如：

```
Vue.component('my-component', {
  // 选项
})
```

对于自定义标签名，Vue.js 不强制要求遵循 [W3C规则](https://www.w3.org/TR/custom-elements/#concepts) （小写，并且包含一个短杠），尽管遵循这个规则比较好。  

**注意：** 要确保再根实例**之前**注册了组件

### 局部注册

不必在全局注册每个组件。通过使用组件实例选项注册，可以使组件仅在另一个实例/组件的作用域中可用：

```
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})
```

### DOM模板解析说明（限制）-`is`属性

当使用 DOM 作为模版时（例如，将 `el` 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 `<ul>` ，`<ol>`，`<table>` ，`<select>` 限制了能被它包裹的元素， 而一些像 `<option>` 这样的元素只能出现在某些其它元素内部。

在自定义组件中使用这些受限制的元素时会导致一些问题，例如：

```
<table>
  <my-row>...</my-row>
</table>
```

自定义组件 `<my-row>` 被认为是无效的内容，因此在渲染的时候会导致错误。变通的方案是使用特殊的 `is` 属性：

```
<table>
  <tr is="my-row"></tr>
</table>
```

**应当注意，如果您使用来自以下来源之一的字符串模板，这些限制将不适用：**

-   `<script type="text/x-template">`
-   JavaScript内联模版字符串
-   `.vue` 组件

因此，有必要的话请使用字符串模版。

### data 必须是函数

data如果是对象，当有多个实例的时候，公用了一个数据。

data是构造函数原型上函数的话，实例中`this.data = this.data()`完成了拥有自己的`data`属性

### 构成组件 组件通信

在 Vue.js 中，父子组件的关系可以总结为 **props down, events up** 。父组件通过 **props** 向下传递数据给子组件，子组件通过 **events** 给父组件发送消息。

## Prop 父组件 >> 子组件

### 使用Prop传递数据

组件实例的作用域是孤立的。*这意味着不能(也不应该)在子组件的模板内直接引用父组件的数据。要让子组件使用父组件的数据，*我们需要通过子组件的**props**选项。

子组件要显式地用 [`props` 选项](https://cn.vuejs.org/v2/api/#props)声明它期待获得的数据：

```javascript
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})
```

### camelCase vs. kebab-case

HTML 特性是不区分大小写的。所以，当使用的不是字符串模版，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名：

```javascript
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
```

```html
<!-- kebab-case in HTML -->
<child my-message="hello!"></child>
```

如果你使用字符串模版，则没有这些限制。

### 字面量语法和动态语法

```
<!-- 传递了一个字符串 "1" -->
<comp some-prop="1"></comp>
```

因为它是一个字面 prop ，它的值是字符串 `"1"` 而不是number。如果想传递一个实际的number，需要使用 `v-bind` ，从而让它的值被当作 JavaScript 表达式计算：

```
<!-- 传递实际的 number -->
<comp v-bind:some-prop="1"></comp>
```

### 单向数据流

prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你**不应该**在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。

为什么我们会有修改prop中数据的冲动呢？通常是这两种原因：

1.  prop 作为初始值传入后，子组件想把它当作局部数据来用；
2.  prop 作为初始值传入，由子组件处理成其它数据输出。

对这两种原因，正确的应对方式是：

1.  定义一个局部变量，并用 prop 的值初始化它：

    ```
    props: ['initialCounter'],
    data: function () {
      return { counter: this.initialCounter }
    }
    ```

2.  定义一个计算属性，处理 prop 的值并返回。

    ```
    props: ['size'],
    computed: {
      normalizedSize: function () {
        return this.size.trim().toLowerCase()
      }
    }
    ```

**注意：** 在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它**会影响**父组件的状态。

### Prop 验证

我们可以为组件的 props 指定验证规格。如果传入的数据不符合规格，Vue 会发出警告。当组件给其他人使用时，这很有用。

要指定验证规格，需要用对象的形式，而不能用字符串数组：

```
Vue.component('example', {
  props: {
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```

`type` 可以是下面原生构造器：

-   String
-   Number
-   Boolean
-   Function
-   Object
-   Array

`type` 也可以是一个自定义构造器函数，使用 `instanceof` 检测。

当 prop 验证失败，Vue会在抛出警告 (如果使用的是开发版本)。

## 自定义事件 子组件 >> 父组件

每个 Vue 实例都实现了[事件接口(Events interface)](https://cn.vuejs.org/v2/api/#Instance-Methods-Events)，即：

-   使用 `$on(eventName)` 监听事件
-   使用 `$emit(eventName)` 触发事件

父组件可以在使用子组件的地方直接用 `v-on` 来监听子组件触发的事件。

不能用 `$on` 侦听子组件抛出的事件，而必须在模板里直接用 `v-on` 绑定，就像以下的例子：

```html
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
```

```javascript
Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')	// 注意这里，这里触发的是在父组件中的‘increment’
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

`this.$emit('increment')`	// 注意这里，这里触发的是在父组件中的‘increment’

**给组件绑定一个原生事件**

在某个组件的根元素上监听一个原生事件。可以使用 `.native` 修饰 `v-on` 。例如：

```
<my-component v-on:click.native="doTheThing"></my-component>
```

### .sync 修饰符

双向绑定数据 如果子组件改变了负组件中的值，更新

## 非父子组件通信

如果2个组件不是父子组件那么如何通信呢？这时可以通过eventHub来实现通信. 
所谓eventHub就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件.

[?](http://www.jb51.net/article/103763.htm#)

**组件1触发：**

[?](http://www.jb51.net/article/103763.htm#)

**组件2接收:**

[?](http://www.jb51.net/article/103763.htm#)

这样就实现了非父子组件之间的通信了.原理就是把Hub当作一个中转站！