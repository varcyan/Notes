# webpack
1. `/` 新建一个文件夹,文件夹下新建一个`webpack.config.js`
2. `/`  新建一个`js`文件夹，把需要打包的`js`文件放入
3. `/js` 新建一个`app.js`文件，把要打包的在`/app.js`中通过`require("./name")`引入
```javascript
require("./utils")
require("./index")
```
4. 配置`webpack.config.js`
```javascript
module.exports = {
	entry: './js/app.js',  //需要打包的文件
	output: {
		path: __dirname, //生成文件的路径，必须是绝对路径
		filename: 'build.js' //生成文件的名字
	},
	module:{    // 用来配合处理模块的
		rules:[ // 用来配置处理某块的规则
			{
				test: /\.css$/,  // 正则 匹配到以css为后缀的文件
				use:['style-loader','css-loader']
			}
		]
	}
}
```
