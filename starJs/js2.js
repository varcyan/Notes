window.document.body.children[0].children[1].innerHTML = '我是修改的文字';

window.document.body.children[0].children[1].style.color = 'red';

var text = window.document.body.children[0].children[1];
text.style.border = '1px solid blue';

alert('null是' + typeof null + '类型');
alert('undefined是' + typeof undefined + '类型');
alert('null==undefined：' + (null==undefined));
alert('null===undefined：' + (null===undefined));

/*
var a = window.document.body.chindren[1].children[1];
a.style.color = "red";

1.window作用域
写在script的所有的对象 默认都是在window里的,定义在window里面


内存中其实分为几种对象
  1.变量
  2.dom对象(堆)
  3.常量(键盘上能敲出来的东西都属于常量123abc)
  4.自定义对象
 
	var age = 30; //存放年龄,整数 - int 数字都是number类型
	var age1 = 22.5; //小数,单精度浮点数 - float
	var hair = 99999999999; //长整型  - long
	var pai = 3.14159263; //双精度浮点型  - double
	var name = "star" //字符(字符类型要加双引号) - string
	var a = document.body; //引用对象类型 - object
	//布尔值 是或否 真或假 0或1 ture/false
	alert(typeof age); number

	--------

	2.数据类型
	number:数字类型
	string:字符类型 必须用引号引起来
	boolean:布尔值ture/false
	------静态

	null:变量引用了堆中的一块空间
	object:引用对象类型(存在于堆里面)
	array:数组类型
	function:函数数据类型 (功能/动态的)

	var obj; //undefined 没有定义
	var obb = null; //引用了内存中一块空的空
	var bj = null==undefined; //true
	var bj = null===undefined; //false
	--------

	var obj = {}; //普通对象 只存在于堆中 不参与绘制
	var obe = {}; 
	alert(obj==obe); false
	var obj = {
		oneNer:"小小",
		age:"20岁",
		money:100
		};
	var obe = {
		twoNer:"哈哈",
		age:"21岁",
		money:500
		};
	//多个属性用逗号分开,一个不需要写","或者";"
	
	数组
	var co = ["a","b",obj,obe];
	alert(c[0]); - a ***************************
	函数
	var f = function(){
			alert(1);
			}
	f(); //调用函数
	function f(){
		alert(2);
		}
	f(); ---- 弹出1 (函数调用才会运行)//JS调用函数的时候,首先去栈里面找有没有一个变量名字叫f 然后去堆里面(栈<堆)
		

	alert(b);---undefined
	var a;
	var b = 1+1;
	var c = function(){};
	function d(){};
	----------------------//js执行顺序,从上往下执行,但是先定义.
	1.定义a 2.定义'='左边b 3.定义'='左边c 4.定义'='右边function 5.定义d 6.alert 7.=右边的1+1赋给b 8.=右边function赋给c 9.定义function d;
	定义(var变量/function函数)  执行(其他);

	// null代表引用了堆中一个(空的)空间 是object类型
	// undefined代表不存在

/*



作业:
	各种数据类型理解- 举个栗子
	自定义对象书写
	函数定义在内存中的变化 - 画图
03
-------document属于栈还是堆? window的属性?
-------类型转换是如何转换的? 有优先级吗?
-------a++ a--

window作用域下的变量//全局变量
function,array,null,object在堆中
window是属性 document是变量-内置的变量 document是window的一个属性

var a;
var b = null;
var c = {};
var d = function(){};
var f = "";
f = d;

var a = 10,b =20,c = a+b;
var a,b = 20;

知识点:
1. 运算符
	算数运算符(+,-,*,/,%,++,--)
	赋值运算符(=,-=,+=,*=,/=,%=)
	比较运算符(==,===,!=,>,<,>=,<=)
	逻辑运算符(||,&&,!)
	条件运算符(1>2?3:4)


"a%b"取模--取余数.

var arr = [1,2,3,4,5];
var random = Math.random();//随机调出一个数字-小数
/var random = window.parseInt(Math.random()*100);//抽到整数
alert(random);

a++ --- a=a+1
a-- --- a=a-1
++放在变量后面是先输出a 再++
++放在前面是先++ 再a

var a = 1; // number
var b = "2"; // string
alert(a+b); //12 不是数字12,是转换类型以后的字符串拼接的结果
alert(a-b); // NaN

var a = 1; // number
var b = null; // 如果引用所指地方是空的话 在运算中相当于0
alert(a+b); // 1

var a = 1; // number
var b = undefined; // 
alert(a+b); // NaN  呵呵哒

var a = 10;
a-=6;// a = a-6; a-6后的值赋给a
alert(a); 

a+++5  (a++)+5; //要赋值 a = (a++)+5;


比较运算符
var a = 10;
var b = 15;
var r = a==b; 
alert(r);   //比较运算符比赋值运算的优先级高

"=="首先做类型转换相比

var tj = true;
var age = 4;
var site = true;
var res = tj&&age>=3age<=5&&site;
var res = tj||(age>=3age&&<=5)||site;
alert(res); // &&"逻辑并"---并  ||"逻辑或"或者-只要有一个条件达到就满足条件

function fuc(arg){
	alert(arg);
}
fuc();

function fuc(a,b){
	alert(a+b);
}
fuc(1,2); //3

function fuc(a,b){
	alert(a+b);
}
fuc(10); //NaN

function add(a,b){
	a = a||0;   //||左边a是(undefined/null/0)false的话 就取0 
	b = b||0;
	alert(a+b);
}
add(); //0

var a = !(5>10);
alert(a); == true  取反


条件运算符
var flag = 1>2?3:4;//三元表达式 判断问号前是非- true-取前,flase取后面.

var age = 17;
var flag = age>18?"成年男子":"小萝莉";
alert(flag);

var age = 17;
var flag = age>18?"成年男子":age<12?"小萝莉":"小正太";
alert(flag);

$$$case
<a href="javascript:add()">+</a>
<input readonly="readonly" id="num" /> readonly=只读
<a href="javascript:add()">+</a>

var num = window.document.getElementById("num");
funtion add(){
	num.value==10||num.value++
}
funtion minus(){
	num.value==0||num.value--
}
*/
