/*
回顾：
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
知识点：
1.prototype内存解析
	prototype是原型，是一块所有对应构造器创建的对象都共享的内存空间
	在面向对象设计程序的时候，属性应该是对应的空间的，而功能应该是prototype公共空间的
2.通过prototype扩展功能
	所有的构造器都是继承于Object构造器的，因此只要Object的原型里有的功能，所有的对象都有
3.封装
	//1：找对象  小头爸爸  大头儿子  饭
	//2：抽象（类，构造器）
	//3：创建对象并且建立关系（操作对象）
4.继承
5.面向对象程序设计案例（猜拳）

封装 继承 拖带


作业：
用面向对象的思维设计十个生活中的场景案例

//alert(x);//9:执行弹出x,结果x没定义,错误.
alert(i);//9:执行弹出i,然而i之前已经定义,只不过没地址,因此是undefiend
var i = 10;//1:var i;    10:把常量池中10的地址赋给栈中的i
var j = "你好";//2:var j;   11:把常量池中 你好 的地址复给栈中的j
var k = z = null;//3:var k,z;  12:把堆中null的地址赋值给z和k
var m = function(){//4:var m;   5:function匿名函数  13:把匿名函数在堆中的地址赋给栈中的m
	alert(2);
}
var b = document.body;//6:var b;	14:把堆中document.body对象的地址赋给栈中的b
var f = true;//7:var f;	15:把常量池中true的地址赋给栈中的变量f
function m(){//8:function m;
	alert(1);
}



*/
//普通的函数	:注重调用的结果
/*function eat(){
	//xxx
	return "result";
}
eat();
*/
//构造器函数 :创造一块新的空间并操作空间  谁调用,当时就是谁的
//功能函数定义在prototype中,不浪费空间
/*
function Person(name){
	this.name = name;
}
Person.prototype = {
	speak : function(){
		console.log(this.name+"在说话。。。");
	},
	run : function(){
		console.log(this.name+'在跑步。。。');
	},
	getMoney : function(){
		return 10;
	}
};

var p = new Person();
alert(p.getMoney());

*/
//obj1.log('这是object1');
//obj2.log('这是object2');

/*
function Dog(name){
	this.name = name;
}
Dog.prototype = {
	name:'流浪狗',
	bark:function(){
		console.log(this.name+":汪汪汪~");
	}
};
var person1 = new Person('张三丰');
var person2 = new Person('张无忌');
person1.run();
person2.run();
//console.log(person1.name);
//console.log(person2.name);
//person1.speak();
//person2.speak();
alert(person1.speak==person2.speak);
//person.speak();
//var dog = new Dog('小黄');
//dog.bark();
*/

//抽象

//继承

//小头爸爸牵着大头儿子（的手）去吃饭
//吃完饭之后小头爸爸背着大头儿子回家

//面向对象程序设计的过程！
//1：找对象  小头爸爸  大头儿子  饭
//2：抽象（类，构造器）
//3：创建对象并且建立关系（操作对象）

/*
function Person(name){
	this.name = name;
}
Person.prototype = {
	eat : function(rice){
		console.log(this.name+"正在吃"+rice.name);
	},
	getHand : function(person){
		console.log(this.name+"正在牵着"+person.name+"的手！");
	}
};
function Rice(name){
	this.name = name;
}
var f = new Person('小头爸爸');
var c = new Person('大头儿子');
f.getHand(c);
var df = new Rice('蛋炒饭');
var xf = new Rice('酱油炒饭');
f.eat(xf);
c.eat(df);
*/
//写十个案例
Object.prototype.log = "zheishilog";
var a = [];
console.log(a.log);