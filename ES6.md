# ES6

### let

let 声明变量

**特点：**
let 声明的变量不会提升
let 声明的变量不会挂载window上
let 声明的变量不能再次被声明（不能使用let重复声明一个变量）
let 声明的变量只能在所声明的块级作用域中有效(包括子块)

**暂存死区**
从块的开始到let声明前 （因为在這段读取不到声明的变量）

*tips*
每次for循环都会使用let声明一个i

### const

const用于声明常量

常量：在定义之后的值是固定不变的

特性参考let

```javascript
const C = 1;	//约定变量名全都大写，不能更改
C = 100; 		//报错；const声明的值不能被更改

// 如果指向引用类型的值，可以操作這个值，但是指针的指向不能被修改
const A = [];
A.push(1000);
console.log(A); // 1000
A = {a: 1};		// 报错
```

### 解构赋值

>   ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
>   解构赋值可将数组的元素或对象的属性赋予给另一个变量；

**作用:**函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便

```javascript
// 数组
var [test1,test2] = ["a", "b"];
console.log(test1) //"a"
console.log(window.test1)	//"a"

// 对象
var obj = { foo:1, bar:2 };
var {foo,bar} = obj;
console.log(foo,bar)	//1，2 变成变量
var {obj:test,bar,abc:a=1000} = obj
console.log(test,bar,a)	//1,2,1000
```
### 模板字符串
写在\``内 ；
要给模板填充一些数组 ${表达式}；（表达式是指运算后会得到一个值，有结果的）

```javascript
//字符串方式
var str = "<ul>" +
	"<li><li>\
	 <li><li>\
	 <li><li>\
	</ul>"
// 模板字符串
var str = `<ul>
			<li></li>
			<li></li>
		</ul>`
```

### Math新增方法

Math.trunc : 去除小数返回整数部分
返回值: 数字，去除后的结果

Math.sign : 判断一个数字是正数，负数还是零
返回值：整数返回1，负数返回-1， 0返回0,  不是数字返回NaN



### 对象的简写方法

对象中的函数可以写成

```javascript
var obj = {
  attr(){
  	console.log('我是一个名字为attr的函数，這是我的新写法')
  }
}
```

### 函数写return值时

```javascript
funtion fn(){
  var x = 'a';
  var y = 'b';
  var str = "cyan" + x;
  return {	//酱紫写就可以啦
  	x,
  	y,
    [str]: 1000,	//[str]其实是str的值
    ['cyan'+y]: 2000  //[]中可以运算
  }
}
```

### Object.is(a,b)
用于对比参数是否严格相等，相对于===运算符，可以正确比较-0和0还有NaN	
```javascript
console.log( Object.is(1,1) );	//true
console.log( Object.is(1,-1) );	//false
console.log( NaN === NaN );		//false
console.log( Object.is(NaN,NaN) );	//true
console.log( Object.is(0,-0) );		//false
```

### 函数的扩展
给形参设置默认值
	fn(形参=值，形参=值){}
rest方式接受参数
	...形参
	依次传入的实参放在形参中，形参是一个数组
用于获取函数的多余参数
语法：
	function fn(a,b=1,...变量名){}
*注意*：rest后边不能再有其他参数，否则会报错