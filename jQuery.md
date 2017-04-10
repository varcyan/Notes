# jQuery

**window.onload**
```javascript
$(function (){})
$(document).ready(function (){})
$().ready(function (){})
```
**获取元素**
```javascript
$(css选择器)  //返回的是jq对象
```
**写原生的元素**
```javascript
$(ele)
```
**css**
```javascript
//设置样式
css(样式名，值)  
css({ 样式名：值, 样式名：值, 样式名：值 })
//获取样式
css(样式名)
```
**attr**
向元素行内中定义自定义属性
```javascript
attr(prop,value)  //设置属性
attr(prop)  //获取值 获取到的是一个字符串
```

**data**
向获取的jq元素对象定义自定义属性 不会再行间出现

```javascript
data(prop,value)  //设置属性
data(prop)  //获取值
```
**index**
***不传参***
jq集合.index()  //返回的是0
示例： $(".box li").index()
jq集合中某一个元素调用  //返回的是这个元素在同辈元素的位置
也就是这个元素在所有兄弟节点中所占的位置

***传参***
那么为参数的元素做所有匹配到的元素集合中所占的位置
\$(".box span").index($(this))

