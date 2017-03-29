/*
回顾：
1.switch
1.while/do...while
	一般情况下面，如果条件判断是数字的比较==<>，for循环优先.
	如果是非数值相关的比较循环，while优先
2.function函数
3.代码内存解析
	闭包
	a.程序永远是先定义后执行
	b.执行永远从上之下
	c.函数定义的话在堆（只是一个地址而已）
	d.函数调用的时候，就会有自己的堆和栈（闭包）
	
知识点：
1.object对象
	new关键字代表的是新开辟一块内存空间
	没有被引用的内存空间，会在适当的时候被销毁
	var person = new Object();
	var person = {};
	两句代码含义等同
	访问对象的属性除了用 对象引用.属性key以外，还可以使用对象引用[属性key]
2.面向对象的程序设计
	a.function构造器
	//共同点:
	//动态创建一块内存空间，闭包
	//不同点：
	//函数调用是没有办法拿到空间的地址的，而且这块地址是一块临时地址，执行完函数之后，就会销毁
	//new开辟内存空间，把这块空间的地址返回，这块空间就有可能长期的被引用
	b.prototype原型
	//通过原型使通过同样一个构造器所new（创建）出来的对象具有相同的属性和行为
	//prototype本质就是一个对象
	c.foreach
	c.this
	d.继承
作业：
	定义十个构造器函数
	人类（学生）	狗		电脑(笔记本)	...
	sl.--
	-l每个构造器的原型必须有至少5个以上的属性和3个以上的行为


用栈里的变量引用堆里的内存,持有对象的句柄
内存地址是十六进制 @abc123
1.
object
i = {
	name:'张三'	//name不是变量, 变量会定义  name是属性 键值对
}
console.log(i);  //Object {name:'张三'};



2.
i = {
	name:'灿烂',
	age:18,
	sex:'girl'
	height:162,  // 属性
	eat:function(){
 	alert('this.name+正在吃饭');
	}	//功能
}
console.log(i.name); //第一种方法
console.log(i['name']); //第二种
var key = 'sex';        //可以這样 动态访问.
console.log(i[key]);
i.eat(); //调用函数

o = {}; 
o = new Object();//看到new 在内存中开辟了一块新的内存空间.     
没有被引用的内存空间,会被适当的时间被销毁

person = {name:'灿烂'}; //初始化 生来就有这个属性 
person.name = '灿烂'	//赋值	后天给的这个后苏醒

var arr = new Array();   //写数组的两种方式 推荐用简单的方式
var arr = [];

i = {face:'丑的一比'};
i.face = '美的一笔';
console.log(i.face)




i = {
	name:'灿烂',
	age: 18,
	eat:function(){
		console.log(this.name+'正在吃饭');
		console.log('经过8小时...');
		return '便便';
	}
};
console.log(i.eat);  // 会把函数定义输出
		     // 没有return值会undefined;
console.log(i.eat());  //'灿烂正在吃' '经过8小时' '便便'
function要有返回值 return

for(var prop in i){  //定义一个prop
	console.log(prop);
}//遍历[迭代]对象  会把i里面的对象输一遍. *string类型

for(var prop in i){   //in后面是某一对象
	console.log(i[prop]);
}  // 拿到的是name等后面的值.

for(var prop in i){  
	var val = i[prop];
	if(typeof val=='number'){
		console.log(prop+':'+val);
	}
} 

var val;
for(var prop in i){  
	val = i[prop];
	if(typeof val=='number'){
		console.log(prop+':'+val);
	}
}  //定义在外面,效率提高



dom对象
domObject是 Dom类型


new Object(); --
new DOM(); --可视化DOM{innerHTML:'',children:[],style:{},...} 有内置属性


1. function eat(){} //普通函数
   eat();
2. function Person(){ //Person 首字母大写  意味着它不能Person();這样调用函数
} // 构造函数,把它作为一个构造器
   new Person(); // 这样调用
   var person = new Person();
//共同点: 共同创建一块内存空间,闭包.
  不同点:
    -普通函数调用时无法调用到空间地址的,而且这快地址是一块临时地址,执行完毕就消失.
    -new是开辟内存空间,把这快空间的地址返回.这快空间有可能长期被使用.
      --一般用new的方式不有return 因为return不出来 出来的是地址.
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype = { // prototype 原型.
	name:'无名氏',
	age: 0,
	eat: function(){},
	work: function(){}
}   // 构造器原型本身是对象
var p1 = new Person('阿灿',18);
var p2 = new Person('灿阿',19);
*/

function a(){
	return "1";
	console.log("n??");
}
console.log(a());