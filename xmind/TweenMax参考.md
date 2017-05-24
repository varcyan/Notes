# TweenMax
### 基本语法
```
TweenMax.to(ele, 0.5, {
    top: 100,
    ease: Back.easeOut,
    onComplete: function (){
        console.log('运动上来了')
    }
})
```
### 运动形式
`ease`  
默认： 减速运动  
直线运动：`Linear.easeNone`  
回弹（减速）：`Back.easeOut` 
### 公共属性
`repeat`: 重复次数（-1为无限）

