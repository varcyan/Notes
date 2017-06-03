# 观察者模式  CLASS

### CLASS

```javascript
// 观察者
class Observe {
	constructor(){
		// '联系方式'汇总
		this.contact = {};
	}
	// 订阅
	take (status_, handle) {
		// 如果没有这个订阅项目，则创建一个项目容器
		if (!this.contact[status_]){
			this.contact[status_] = [];
		}
		// 把'联系方式'放到订阅容器中
		this.contact[status_].push(handle);
	}
	// 删除
	del (status_, handle) {
		var arr = this.contact[status_];
		if (arr && arr instanceof Array){
			for (var i=0; i<arr.length; i++){
				if (arr[i] === handle){	// 找到這一项
					arr.splice(i,1);	// 从数组中删除
					break;
				}
			}
		}
	}
	// 发布
	publish (status_) {
		// 根据状态找到订阅者
		var arr = this.contact[status_];
		if (arr && arr instanceof Array) {
			for (var i=0; i<arr.length; i++){
				arr[i]();
			}
		}
	}
}
```
事件监听 绑定的是时间监听器
在這个模式中需要三个部分组成
1.  发布者
2.  订阅者（观察者）
3.  订阅状态（订阅内容）

```javascript
var ob = new Observe;
ob.take(1,function (){
	console.log('var订阅了1');
})
function v(){
	console.log('v订阅了1');
}
ob.take(1,v)
ob.take(1,function (){
	console.log('ar订阅了1');
})
ob.take(2,function (){
	console.log('var订阅了2');
})
ob.del(1,v);
document.onclick = function (){
	ob.publish(1);
}
```





### 原生

```javascript
/*
	事件监听
		绑定的是事件监听器

	在这个模式中需要三个部分组成：
	1. 发布者
	2. 订阅者
	3. 状态


*/
var salesOffices = {};  //售楼处

salesOffices.book = {};  //记录电话号码的

//订阅
salesOffices.subscribe = function (statuss,handle){
	//看一下状态有没有？
	// 没有对应的数组，那么定义空数组
	if( !salesOffices.book[statuss] ){
		salesOffices.book[statuss] = [];
	}

	salesOffices.book[statuss].push(handle)
}

//发布
salesOffices.publish = function (statuss){
	//执行订阅的函数
	var books = salesOffices.book[statuss];
	//判断拿到的订阅者是否为空，不为空就通知
	if( books ){
		for( var i = 0; i < books.length; i++ ){
			books[i]();
		}
	}
}

salesOffices.subscribe('100M',function (){
	console.log("通知了小明");
})
salesOffices.subscribe('100M',function (){
	console.log("通知了小李");
})
salesOffices.subscribe('200M',function (){
	console.log("通知了小红");	
})



//售楼处有楼了，通知那些订阅者
salesOffices.publish("500M");
document.addEventListener("click",function (){
	console.log(11);	
})
```

