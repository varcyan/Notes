/*

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

小数%大数，得到的结果是其本身

var arr = [1,2,3,4,5];
var random = Math.random();//随机调出一个数字-小数
/var random = window.parseInt(Math.random()*100);//抽到整数 0-99之间
alert(random);
alert(arr.[randow%5]); //几个值就取模几；

a++ --- a=a+1
a-- --- a=a-1
var a = 1;
alert(a++); alert(a); // 1,2
alert(++a); alert(a); // 2,2
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

a+++5	// 16
var a = (a++)+5; //15 要赋值 a = (a++)+5;


比较运算符
var a = 10;
var b = 15;
var r = a==b; 
alert(r);   //比较运算符比赋值运算的优先级高
//表达式的运算符大于赋值运算符

"=="和"!="首先做类型转换再相比
"==="和"!=="不转换

var tj = true;
var age = 4;
var site = true;
var res = tj&&age>=3age<=5&&site;
var res = tj||(age>=3age&&<=5)||site;
alert(res); // &&"逻辑并"---并  ||"逻辑或"或者-只要有一个条件达到就满足条件

function fuc(arg){
	alert(arg);
}
fuc(); //undefined

function fuc(a,b){
	alert(a+b);
}
fuc(1,2); //3

function fuc(a,b){
	alert(a+b);
}
fuc(10); //NaN a和b是undefined

function add(a,b){
	a = a||0;   //||左边a是(undefined/null/false/0)false的话 就取后者（无论后者是true还是false）
	b = b||0;
	alert(a+b);
}
add(); //0


function show(obj){
	alert(obj.age);
}
show(); // 报错 obj本身是undefined，undefined的age不存在
function show(obj){
	obj = obj||{}
	alert(obj.age)
}
show(); // undefined; obj没有传参所以是空对象，空对象的age是undefined


var a = !(5>10);
alert(a); // true  取反


条件运算符
var flag = 1>2?3:4;//三元表达式 判断问号前是非- true-取":"前,flase取":"后面.

var age = 17;
var flag = age>18?"成年男子":"小萝莉";
alert(flag);

var age = 17;
var flag = age>18?"成年男子":(age<12?("小萝莉":"小正太"));
alert(flag);

$$$case
<a href="javascript:add()">+</a>
<input readonly="readonly" id="num" /> readonly=只读/不能输入
<a href="javascript:add()">+</a>

var num = window.document.getElementById("num");
function add() {
	num.value==10||num.value++;
}
function minus() {
	num.value==0||num.value--;
	num.value==0?0:num.value--;
}
*/

function fuc(a,b){
    alert(a);
}
fuc(10); 