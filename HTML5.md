# HTML5

## 页面结构精简

```
<!DOCTYPE html>
```

## 新标签

### 结构相关

1. <header></header>   页眉： 用与网页头部区域
2. <nav></nav>         导航： 用于主导航
3. <hgroup></hgroup>   标题组合
4. <footer></footer>   页脚： 用于页脚区域
5. <section></section> 板块： 用于划分页面上不同的区域
6. <div></div>         模块： 居于板块之内
7. <article></article> 用于页面中完整且独立一套主体结构
8. <aside></aside>     包含与当前article(在它之外使用)内容相关的附属引用

### 语义相关

1.  <figure></figure>  用于对元素进行组合。一般用于图片或视频
2.  <figcaption><figcaption>  figure的子元素 用于对figure内容进行说明
3.  <time datatime="2017-02-14"></time>  时间 datatime对时间描述 方便查找

### 功能相关

1.  <datalist></datalist> 存放提示（可能会出现的）值/列表 option表示子项
2.  <details open>详情信息 <summary>简略信息 点击可以展开详情信息 open表示默认显示
3.  <dialog open> 对话 dt dd
4.  <address> 定义作者信息
5.  <mark>  标记
6.  <keygen name=""> 公钥
7.  <progress max="最大值" value="走了多少"></progress>

## JSON的新方法

-   JSON.parse()
-   JSON.stringify() 把json转成相应的字符串

### 深度克隆对象

```
var a = {
  name: 'hello'
}
var str = JSON.stringify(a)
var b = JSON.parse(str)
// 深拷贝 对象的引用
```

IE低版本不支持：www.json.org json2.js 实现兼容

## 自定义数据与js加载

### 自定义数据

-   dataset 读取
-   data-开头

```vue
<div data-abc="1"></div>
// dataset.abc
<div data-abc-all="1"></div>
// dataset.abcAll
```

jquery mobile 对自定义属性有重要应用

knockout 框架

### JS加载

-   defer 延迟加载 不会立即执行, 延迟到onload执行之前
-   aysnc 异步加载，并排执行 不是特别需要的慢慢加载

Labjs库  异步加载js库

## 历史管理

浏览器的历史管理

触发历史管理： 

-   跳转页面

-   hash值

    -   onhashchange 当hash改变时触发

-   pushState

    -   服务器下运行

    -   history.pushState() 

        -   三个参数 数据,标题（还没实现）[[,网址是否改变（不可刷新）]
        -   window.onpopstate = function (ev) {odiv.innerHTML = ev.state} 改变历史管理的时候触发 
        -   注意： 网址是虚假的，应当在服务器做相应的映射

        ​

        ​

## 拖放

draggable="true"

```
<div draggable="true"></div>
// 拖出来的是一个副本
```

-   拖拽元素事件
    -   dragstart 拖拽前触发 ondragstart
    -   drag  拖拽时
    -   dragend 拖拽结束
-   目标元素事件
    -   dragenter 进入目标元素触发 相当于mouseover
    -   dragover  mousemove
    -   dragleave 离开目标元素触发 相当于mouseout
    -   drop 在目标元素上释放鼠标触发 默认不能
        -   触发必须在dragover中阻止默认事件 ev.preventDefault()

问题：

火狐下不能拖拽

-   必须设置dataTransfer对象的setData方法才可以拖拽除图片外的其他标签

dataTransfer对象

```
ondragstart 里面
ev.dataTransfer.setData('name', 'hello');
```



-   setData(): 设置数据，key和value(必须时String)
-   getDate(): 获取数据，


## 地理位置 Geolocation

经度 维度

### 位置信息从何而来

-   IP地址
-   GPS
-   wifi
-   基站

navigator.geolocation

-   单词定位请求： 