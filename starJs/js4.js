/*
带"()"的多半是调用函数，

###知识点:
1.console.log调试程序
	alert(window.console) //[object Console]
	console.log();
	
	window.alert('提示对话框');
	window.confirm("确认对话框"); // 确定对话框
	window.prompt('输入年龄');  //输入框
	

	var age = parseInt(window.prompt('请输入年龄'));
	age = typeof age == 'number'?age:0;
	var role = age>18?"成年":(age>12?"小正太":"小萝莉");
	console.log(role);


	var sex = prompt("请输入性别:(男:1,女:2,三岁以下儿童:3)");
	console.log("用户输入的性别是:"+sex);
	if(sex == 1){
		console.log("进入crossfire");
	}else if(sex == 2){
		console.log("进入x5");
	}else if(sex == 3){
		console.log("都不能进");
	}


	var age = prompt("请输入年龄");
	if(age>18){
		console.log("成年男子");
	}else if(age>12){
		console.log("小正太");
	}else if{
		console.log("小萝莉");
	}
	

	var age = prompt("请输入您孩子的年龄(3~5)");
	if(age>=3&&age<=5){
		console.log(年龄合格);
		var height = prompt("请输入您还在的身高(80~120)");
		if(height>=80&&height<120){
			console.log("身高满足条件");
			var money = prompt("请交钱!!2000+");
			if(money>=2000){
				console.log("欢迎小朋友");
			}else{
				console.log("吃屎去吧");
			}
		}else{
			console.log("体检不合格!!");
		}
	}else{
		console.log(洗洗睡吧);
	}

2.条件结构
	if
	if...else
	if...else if...else
	switch case
3.循环结构

*/
console.log(typeof alert);