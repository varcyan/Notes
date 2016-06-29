//确认要求: 用户输入"*"的上半部行数
// 3行会总共出现5行  3行5列 4行7列
//每行个数是行数*2-1
//通常外层是行数
//每行空格的数量,例如第一行是输入的行数-1 定义一个变量建立关系
/*
总行数 = 输入数*2-1

正方形
var line = window.parseInt(window.prompt('请输入行数')||0);
for(var i=0;i<=line;i++){
	for(var j=0;j<=line;j++){	//j表示列数,它与谁建立关系就跟谁比较
		document.write('* ');
	}
	document.write('<br />');
}

3行5列  4行7列
c是前面的空格数
var line = window.parseInt(window.prompt('请输入行数')||0);
for(var i=1,c=line-1;i<=line;i++,c--){
	for(var j=1;j<=c;j++){
		document.write('&nbsp');
	}
	for(var j=1;j<=i*2-1;j++){
		document.write('* ');
	}
	document.write('<br />');
}
for(var i=line-1,c=1;i>=1;i--,c++){
	for(var j=1;j<=c;j++){
		document.write('&nbsp');
	}
	for(var j=1;j<=i*2-1;j++){
		document.write('* ');
	}
	document.write('<br />');
}

for(定义循环变量,判断条件,改变循环变量的值){}


1.while/do...while
	一般情况下,如果条件是数字的比较==<>,for循环优先;
	如果是非数值相关的比较循环,while优先.
	do..while 例如玩游戏,先玩一次,再问还要不要在玩
2.function函数
3.代码内存解析
	闭包:
	 a.程序永远先定义后执行
	 b.执行永远从上到下
	 c.函数定义的话在堆(只是一个地址而已)
	 d.函数调用的时候,就会有自己的堆和栈(闭包)
         函数调函数 -- 压栈




var i = 0;
while(i<10){
	console.log(i);
	i++;
}

do{
	console.log(i);
	i++;
}while(i<10);
如果判断条件是数字的判断比较用for 

window.alert('欢迎进入猜拳游戏!');
var user;
do{
	user = window.prompt('请输入石头剪刀布(0:石头,1:剪刀,2:布)');
}while(!(user==0||user==1||user||2));
user = parseInt(user);
var com = parseInt(10*Math.random())%3;

//函数 功能 动作 方法 行为
()小括号里的东西是参数,需要完成这个功能要提供的条件

function mon(all,one){
	console.log('吃饭...');
	return all-one;
}
mon(100,8);
var res = console.log();
console.log(res);


//判断顺序
var i=0; 	//1.定义i          //5.0给i
function m(){	//2.定义函数(堆)	  //6.调用m
	console.log('...');
}
m();
var j = i+10;	     //3.定义j    //7.10给j
if(j!=10){			 //8.判断if? false
	var b = 20;  //4.定义b   
}
console.log(b);		//9.undifined;
*/
//
//while  do/while function 
//与电脑进行石头剪刀布游戏
//内存图
//1
/*
var upRow = window.prompt("请输入上半部分行数");
for(var i = 1,c = upRow-1; i <= upRow; i++,c--){
	for(var j = 1; j<=c; j++){
		document.write("&nbsp;");
	}
	for(var j = 1; j<=i*2-1; j++){
		document.write("* ");
	}
	document.write("<br />");
}
for(var i = upRow-1,c = 1; i >=0; i--,c++){
	for(var j = 1; j<=c; j++){
		document.write("&nbsp;");
	}
	for(var j = 1; j<=i*2-1; j++){
		document.write("* ");
	}
	document.write("<br />");
}
*/
/*
var a = 10;
while(a>0){
	console.log(a);
	a--;
}
var b = 5;
do{
	alert(b);
	b--;
}while(b>0)
*/
/*
//与电脑进行石头剪刀布游戏
var me = parseInt(window.prompt("石头-0,剪刀-1,布-2"));
var com = parseInt(10*Math.random())%3;
var res = me - com;
function f(a){
	switch(a){
	case 0:
		return "石头";
		break;
	case 1:
		return "剪刀";
		break;
	case 2:
		return "布";
		break;
	}	
}
if(me!=0&&me!=1&&me!=2){
	console.log("姿势不正确");
}else{
	console.log("你输入的是" + f(me));
	console.log("电脑输入的是" + f(com));
}
switch(res){
	case -1:
	case 2:
		console.log("赢");
		break;
	case 1:
	case -2:
		console.log("输");
		break;
	case 0:
		console.log("平局");
}
*/