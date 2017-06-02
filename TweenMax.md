TweenMax
在线引用地址

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TweenMax</title>
    <style>
    	.div1{
    		width:200px;
    		height:200px;
    		background: red;
    		position: absolute;
    	}
    </style>
</head>
<body>
	<div class="div1"></div>
	<script src="js/TweenMax.js"></script>
	<script>
		TweenMax.to(".div1",3,{left:600})
	</script>
</body>
</html>
```
### 
语法
`TweenMax.to("target",duration,{vars})`
`TweenMax.to(".div1",3,{left:600})`


第一个参数可以当css选择器来使用，引号里面当选择器来使用。也可以获取完成后使用，不需要加引号

```
var box=document.querySelector("#div1")
TweenMax.to(box,500,{left:600})
```


还可以这样写
```
TweenMax.to(box,5,{
	left:600,
	backgroundColor:"blue",
	borderRadius:26
})
```


```
TweenMax.to(box,5,{
    x:600,
    rotation:360,
    scale:0.5
})
```


```
<div id="div1" style="transform: matrix(0.5, 0, 0, 0.5, 600, 0);"></div>
```
GSAP和velocity

```
TweenMax.to(box,5,{x:600})
```


先加速再回落
```
TweenMax.to(box,2,{x:600,ease:Back.easeOut})
```


有弹性的
```
TweenMax.to(box,2,{x:600,ease:Elastic.easeOut})
```

还可以写from，从什么样的状态开始

```
TweenMax.from(box,0.5,{opacity:0,scale:0,ease:Bounce.easeOut})
```

可以设置延迟

```
TweenMax.from(box,0.5,{opacity:0,scale:0,ease:Bounce.easeOut,delay:2})
```


多个div