



怎么确定一个方法在浏览器中是否存在？
`if ( obj.fn )` 

怎样写一个方法？
参数\返回值\调用方法

### 1.getElementsByClassName

**兼容：**标准浏览器，ie9

### 2.querySelector

**兼容：**标准浏览器 ie8

### str.trim

**兼容：**标准浏览器 ie9

### forEach

```
function forEach(arr,callback){
	//循环数组，执行函数，给函数传入每一项和下标
	for( var i = 0; i < arr.length; i++ ){
		callback(arr[i],i)
	}
}
```

### scrollTop

document.body.scrollTop  chrome
document.documentElement.scrollTop 非chrome