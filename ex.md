1. "a" in window
2. 函数作为表达式被赋值给变量时，它的名字仅在自己的函数作用域可用
```javascript
var a = 1,
b = function a(){
  x && a(--x);
}
console.log(a);
```
3. 函数优先级比未赋值的变量优先级高
```javascript
function a(x){
  return x*2
}
var a;
conosle.log(a); //函数体
```
4. 非严格模式下 arguments的值可以被改写
5. 非严格模式下，`call(null)`的`this`指向是`window`
6. 找出数组中的最大值
```
var arr = [1,2,3];
Math.max.apply(null,arr);
Math.max(...arr);
```
7.
```javascript
var arr = [2,3,4,5];
arr.map(function (item){
  return function (){
    alert(item)
  }
})
```
9. 2 4 11 2  3 3
