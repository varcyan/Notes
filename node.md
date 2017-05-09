#### 用node运行js
$ node 文件名

#### js文件依赖
引入模块：使用`require()`
- 参数是路径，返回值是一个对象，即（`module.exports`对应的值）


暴露模块：`module.exports`

例如：

`exports.add = add`

`exports = module.exports = {}`


一个文件就是一个模块，但模块里的变量都不能在外面用，（类似于匿名函数自执行）；
因此要暴露模块的API




搜索模块先搜索内置模块，再去`node_modules`文件下的目录模块查找
#### 内置模块
> 在安装node时已经安装，只需要引入

#### 目录模块
```javascript
let express = require('express');
```

每个模块下都有一个`package.json` 读取时读取的是 `package.json` 中的`main`对应的`index.js`文件


*监控自启动*
```
npm install supervisor -g
```

引入jq文件
```
//静态资源文件夹
```

**解析post需要bodyParser 中间键**
先安装，再文件中配置
```
// 引入
var bodyParser = require('body-parser');
// 设置
app.use()

app.post(){
  req.body //post数据在这里
}

```

```
const express = require('express');
const app = express();

app.get('/', () => {
    res.sendFile()
})
```
