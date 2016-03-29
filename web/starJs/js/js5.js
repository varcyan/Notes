/*
当通过判断返回某个值的时候，优先使用三元表达式

|| 逻辑或
var box = 0;
var hei = i==0||i++||3;
console.log(hei); //3 true 
console.log(i); //1
&& 逻辑与 从左到右检查,只有所有条件全部为真.
var box = 0;
var hei = i==0&&++i&&i++;
console.log(hei); //1
console.log(i);2

if(){
	console.log(0);
}else{
	console.log(1);
}

ex1?res1:res2;

比较运算符会转型,非比较类型不会自动转型

var i = window parsInt(window.prompt('请出拳:(0:石头,1:剪刀,2:布)'))

switch(i){	//选择(判断)i
	case '0':
		console.log('石头');
		break;
	case 1:
		console.log('剪刀');
		break;
	case 2:
		console.log('布');
		break;
	default:
		console.log('你的出拳不正确!');
}
switch开关 case判断 break跳出 default默认
switch结构如果没有break,只要匹配上一个case，那么它下面所有的case都会执行包括default


####  for循环
for 循环三要素
	a:循环变量
	b:判断条件
	c:改变循环变量

var count = 100;
for(var i=0;i<count;i++){
	console.log('第'+i+'遍:奏凯');
}

跑圈
var count = 10;
for(var i=1;i<=10;i++){
	console.log('跑完一圈还剩下'+(count-i-1));
	if(i==5){
		break;	//跳出for循环
	}
}
上班
var date = 31;
for(var i=1;i<=31;i++){
	console.log('今天是'i'号');
}

var date = 31;
for(var i=1;i<=date;i++){
	if(i%7==0){
		console.error('今天是'+i'号,星期日'+'休息');
	}else{
		console.log('今天是'+i+'号,星期'+(i%7)+'正常上班');
	}
}

continue 结束本次循环,进入下次循环

第N次循环
for(var i=0;i<10;i++){
	for(var u=0;u<10;i++)(){
		console.log('第'+(i*10+u)+'次循环');
	}
}
正方形
for(var i=1;i<=10;i++){
	for(var u=1;u<=i;i++)(){
		document.write('*');
	}
	document.write('<br />')
}
99乘法表
for(var i=1;i<=9;i++){
	for(var u=1;u<=j;i++)(){
		document.write(i+'*'+j+'='+(i*j));
	}
	document.write('<br />')
}

swicth 上下左右 10B
for循环 10B
   跑圈 10
   周末 10
   周日周六 10
   嵌套-方形  5
   嵌套-直角三角形 10
   99乘法表 正序倒序 10
   *等腰三角形
   *菱形
   *空心菱形
*/

