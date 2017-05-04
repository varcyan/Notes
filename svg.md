# svg

```html
<!-- 一个圆 -->
<svg width="400" height="400">
  	<text y="160" x ="160" font-size="100">m</text>
	<circle cx="0" cy="0" r="100" style="fill:#ff6600">
  		<animate
			attributeName = "r"
			attributeType = "XML"
			from = "50"
			to = "80"
			begin = "0s"
			dur = "2s"
             fill = "freeze"
             repeatCount = "indefinite"
		/>
    </circle>
</svg>
<!--
	svg 画布
		width: 画布宽
		height: 画布高
	形状-----------
	style="fill:#fff" 颜色
	circle 圆形
		r 半径
		cx 元的中心点距离画布的x坐标
		cy 元的中心点距离画布的y坐标
	polygon 自定义？
		points 点的坐标
	text 里可以放文字
		x y 是文字左下角相对于画布的坐标
	路径------------
	path 
		d 坐标点
		stroke 颜色
		stroke-width="2" 路径的宽度
		fill = "none"
	动画------------
	animate
		id 动画的id(可用于其他动画访问)
		attributeName 要运动的属性 ①可以是暴露的行间熟悉 ②可以是css属性
		attributeType 动画属性的类别（XML/CSS）
		---
		from 开始值 (不写时为当前值)
		to 最终值
		by 运动值(可以代替to,但to优先)
		values 指定一组运动数值
			values="50;80;50" 50运动到80再从80运动到50
		---
		begin 什么时候开始运动 相当于延迟时间
			id.end 当某个动画结束后开始
			id.end + 5s 可以是一个表达式，第一个结束5s后开始
			"3s;5s" 3s后走一下，5s后走一下，如果5s时还没运动完，立即从头开始
		dur 运动时间
		---
		fill 动画结束后停留的地方
			freeze是停留在最后一帧
			remove是默认值 回到动画初始状态
		repeatCount 重复次数
			indefinite 无限循环
			1，2，3..   指定次数
	animateTransform
		type = "rotate|translate|scale,skew" 运动的属性
			from = "0 125 125" 第一个参数是角度，第二个和第三个是相对于画布的旋转基点
	animateMotion 引导线动画
		path = "M100 100 ..." 沿着运动的路径
		rotate = "auto" 运动时自动旋转
-->
```

