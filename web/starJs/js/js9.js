回顾：
1.prototype内存解析
	prototype是原型，是一块所有对应构造器创建的对象都共享的内存空间
	在面向对象设计程序的时候，属性应该是对应的空间的，而功能应该是prototype公共空间的
2.通过prototype扩展功能
	所有的构造器都是继承于Object构造器的，因此只要Object的原型里有的功能，所有的对象都有
3.封装
	//1：找对象  小头爸爸  大头儿子  饭
	//2：抽象（类，构造器）
	//3：创建对象并且建立关系（操作对象）
知识点：
1.继承
2.面向对象程序设计案例（猜拳）

作业：

Object.prototype.extends = function (Person,actions){
	for(var p in Person.prototype){
		this.prototype[p] = Person.prototype[p];
	}
	for(var p in actions){
		this.prototype[p] = actions[p];
	}
}
Father.extends(Person,{
	work: function(){
		console.log(this.name + "工作");
	}
})





//功能函数
/*
function person(){
	return "张三";
}
var res = person();//通过调用功能函数,会在堆中动态创建一个空间闭包，
//执行完毕后把结果return出去，空间就回收
//功能函数注重的是函数的功能和结果
*/
//构造器函数
/*
function Person(name){//
	this.name = name;
}
//空间，并且把这块空间的内存地址返回出去，我们的目标其实就是操作这块新的内存

Person.prototype = {
	eat:function(){//吃的行为
		console.log(this.name+'正在吃饭');
	},
	run:function(){
		console.log(this.name+'正在奔跑');
	},
	study:function(){
		console.log(this.name+'正在学习');
	}
};//new关键字代表的是动态在堆中开辟一块内存
var p = new Person('张三');
p.eat();
var p1 = new Person('李四');
p1.eat();
*/

//小头爸爸牵着大头儿子的手去吃饭，吃完饭之后，
//小头爸爸背着大头儿子回家，回家后儿子学习，老爸工作，工作学习完后
//儿子看动画片
//围裙妈妈带儿子睡觉
//张三和张四
//分析对象 小头爸爸 大头儿子 饭 以及功能
//设计构造器（类）
//创建对象以及他们之间的关联
function Person(name){
	this.name = name;
}
Person.prototype = {
	getHand:function(person){//牵手
		console.log(this.name+"正在牵着"+person.name+"的手...");
	},
	eat:function(rice){
		console.log(this.name+"正在吃"+rice.name+"...");
	},
	/*
	carry:function(person){
		console.log(this.name+"正在背着"+person.name+"...");
	},
	*/
	backHome:function(){
		console.log(this.name+'回家');
	},
	study:function(){
		console.log(this.name+'正在学习');
	},
	watchTV:function(jm){
		console.log(this.name+'正在看'+jm+'...');
	}
};
Object.prototype.extends = function(func,actions){
	for(var prop in func.prototype){
		this.prototype[prop] = func.prototype[prop];
	}
	for(var prop in actions){
		this.prototype[prop] = actions[prop];
	}
};
function Father(name){
	this.name = name;
}
Father.extends(Person,{
	carry:function(person){
		console.log(this.name+"正在背着"+person.name+"...");
	},
	work:function(){
		console.log(this.name+"正在工作");
	}
});
function Children(name){
	this.name = name;
}
//扩展
//设计程序有个原则：不修改只增加
Children.extends(Person);

function Mother(name){
	this.name = name;
}
Mother.extends(Person,{
	scoop:function(person){
		//判断必须是children的对象才能执行这个功能
		//if(){
			console.log(this.name+"唱着摇篮曲哄"+person.name+"睡觉");
		//}
	}
});

function Rice(name){
	this.name = name;
}
var p1 = new Father('小头爸爸');
var p2 = new Children('大头儿子');
p1.getHand(p2);
p1.eat(new Rice('茄子炒饭'));
p2.eat(new Rice('小份蛋炒饭'));
console.log('吃完饭后');
p1.carry(p2);
p1.backHome();
p2.study();
p1.work();
p1.watchTV('看足球');
p2.watchTV('蜡笔小新');
var p3 = new Mother('围裙妈妈');
p3.scoop(p1);
//面向对象的编程指的是组织业务逻辑的代码操作的都是对象