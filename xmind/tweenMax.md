## 引入
```html
<script src="js/tweenmax.min.js"></script>
```
实例化对象
```js
var t = New TimelineMax()
t.to('#box', 2, {
  left: 300
},5)
t.straggerTo("div", {
  cycle
})
```
