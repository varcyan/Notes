alert(window);





/*
cup - 脑子
显卡 - 呈现
内存 - 脑容量
<script type="text/javascript" src="">引入JS文件</script>
window.onload = {
	当浏览器吧文件加载完以后再执行
}
把scriipt放在最下面，减少下载时间；

新打开一个页面，浏览器开始解析时，相当于浏览器内存中创建了一个新的对象
解析的每个标签都有自己唯一的内存地址

javascript本质：操作内存里的对象（改变样式，设置属性）然后重新画到内存中

window-浏览器窗口
document-html

操作系统就是一个应用程序；
只要是应用程序都要占用物理内存；
浏览器本身也是应用程序；
∴ 浏览器也占用内存
浏览器本身只懂得解析HTML
调用浏览器应用程序的一个功能
- 绘制
			
		
1.JavaScript介绍
				目的:
					-就是用来操作内存中的DOM节点
					-修改DOM节点的属性
					-通过JavaScript语法组织逻辑代码操作DOM
				
	BOM(window) 包含了DOM
	DOM(document) oject model  ——tree
	html——根 head、body、div...——枝
				
2.基于对象的内存管理
			
3.变量: 指针  引用  变量

	"=" 在程序里代表的是"赋值"，把等号右边的值赋予给左边的变量
					
	书写规范:
	1.由字母数字下划线(_)以及美元符号($)
	2.不能由数字开头
	3.明明尽量用英文并且具有一定的含义
	4.不能使用关键字
	5.如果有多个英文单词,后面单词的首字母大写;
*/
/*
	alert(1);  弹出1
	alert(window); 浏览器窗体
	alert(document); html
	
	window.location.href=""; 跳转到百度
	
	alert(window.document==document); 
	两个“==”比的是他们两个的(内存地址)地址是不是一样 //ture
 */
/*
	document.body  body的内存地址
	var b = document.body
	"=" 在程序里代表的是"赋值"，把等号右边的值赋予给左边的变量
*/
/*
	1.由字母数字下划线(_)以及美元符号($)
	2.不能由数字开头
	3.明明尽量用英文并且具有一定的含义
	4.不能使用关键字
	5.如果有多个英文单词,后面单词的首字母大写;
*/
/*
布局-原理-动作
document.getElementById('#div');
*/