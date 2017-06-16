# Vue - 2 实例

### 构造器

每个 Vue.js 应用都是通过构造函数 `Vue` 创建一个 **Vue 的根实例** 启动的：

```javascript
var vm = new Vue({
  // 选项
})
```

在实例化 Vue 时，需要传入一个**选项对象**，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。

可以扩展 `Vue` 构造器，从而用预定义选项创建可复用的**组件构造器**：

```javascript
var MyComponent = Vue.extend({
  // 扩展选项
})
// 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent()
```

### 属性和方法

每个 Vue 实例都会**代理**其 `data` 对象里所有的属性：

```javascript
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3
```

注意只有这些被代理的属性是**响应的**。如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。我们将在后面详细讨论响应系统。

除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 `$`，以便与代理的 data 属性区分。例如：

```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```

注意，不要在实例属性或者回调函数中（如 `vm.$watch('a', newVal => this.myMethod())`）使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。因为箭头函数绑定父上下文，所以 `this` 不会像预想的一样是 Vue 实例，而是 `this.myMethod` 未被定义。

### 实例生命周期

-   beforeCreate 组件刚刚被创建，组件属性计算之前，如data属性等  
-   created 组件实例创建完成，属性已绑定，但DOM还未生成 $el属性还不存在  
-   beforeMount 模板编译/挂载之前  
-   mounted  模板编译/挂在之后（不保证组件已经在document中）
-   beforeUpdate 组件更新之前  
-   updated  组件更新之后  
-   activated for`keep-alive`,组件激活时调用
-   deactivated for `keep-alive`, 组件移除时调用
-   beforeDestory 组件销毁前调用  
-   destoryed  组件销毁后调用