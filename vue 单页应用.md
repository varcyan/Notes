# Vue单页应用
## intro
- 在一个页面中
- 初始加载html css js
- 不会重新加载js css,也不会跳转页面
- js来动态变化html

*使用vue-router来变化视图(本质上使用的是hash值的不同映射不同的视图)*


\--------------------------------------

  路由库 : 把路由和视图做一个映射

\--------------------------------------

## 过程
1. `main.js` 中引入入口文件
  ```javascript
  // 通过import引入 (`vue`入口 `app`组件入口)
  import Vue from 'vue'
  import App from './App'
  ```
2. 引入`router`。 可以通过直接引入`vue-router`（详见package.json文件）
  ```javascript
  import Router from 'vue-router'
  ```
  也可在src下新建一个`router`文件夹，下建立一个`index.js`文件来编写,则main.js中需要这样引入（`index.js`文件可以不明写），采用這中方式，主js文件应写在`index.js`中,`export default`把這个实例暴露出去
  ```javascript
  import Router from './router'
  ```
3. 引入后，要使用`Vue.use()`使`router`作为插件使用,参数填写引入`router`时指定的名字
  ```javascript
  Vue.use(Router)
  ```
4. 创建一个实例`router`,参数是一个对象，对象的`routes`属性对应的数组规定路由与视图；存在子路由时，数组中的每个对象有个`children`的属性,对应的是一个数组
  ```javascript
  var r = new Router({
    routes: [
      {
        path: '/home',       // 路由
        component: Home,    // 這里的Home是用import引入的组件
        name: 'Home',        // 用于route-link to属性的读取
        meta: {
          requiresAuth: false
        },                  // 需要登陆
        children: [         // 数组里的是`/home`下的子路由
          {
            path: 'code',     // 这里的path不需要再写'/'
            components: Code
          }
        ]
      }
    ]
  })
  ```
5. 注意一定要引入对应的`.vue`视图,`@`表示的是`src`目录
```javascript
import Home from '@/components/home'
```
6. 在`main.js`中的`Vue`实例中加入 `router：r`,r是存实例的变量
7. 在`app.vue`下告诉它要显示在哪儿，使用`router-view`标签就可以

## 补充

1. 动态路由： 多个视图使用同一个模板
  path: 'user/:id?' id可以出现0次或1次
2. 路由信息对象
  如果在模板里 {{ $router }}
  获得路由信息 {{ $router.params.id }}
3. 钩子函数
  ```javascript
  beforeRouteEnter (to,from,next){
    // 匹配到路由之后，即将展示视图之前
    // 不能用组件实例this 因为还没有创建实例
    // 只会调用一次
    /*
    to   【obj】到哪儿   目标路由
    from 【obj】从哪儿来 离开的路由
    next 【fn】一定要调用next next决定要不要进入视图,回掉函数的参数是示例
    */
  }

  beforeRouteUpdate(){
      this 指向实例
      // 在路由给更新的时候
  }
  ```
 ```
4. 链接
 ```
  a href="#/user/1"
  router-link to=""
  <router-link :to="{name:'study'}"><router-link>

    to="路径" 相对于当前目录
    to="/路径" 相对于根目录
  ```
5. watch 监控$route对象
  ```javascript
  watch: {
    '$route' () {
      // this 指向实例
    }
  }
  ```
6. css的引入，新建一个文件夹存放css,并建立一个app.css,引入其他所有css文件
```
// app.css
@import './index.css';

//main.js
require('./assets/css/app.css')
```

---
```
src
| - assets - css
| - components - 公共文件
| - views - 私有视图

|- main.js
  导入 css 的入口文件
  require('./assets/css/app.css')
```
 先写首页的组件
 引入header
  在需要的文件中import 引入，并在export default 暴露注册 components:{customHeader }
meta: {requiresAuth： true} 需要登陸


.gitignore

package.json  dependencies 打包需要


webpack 打包  
vue-cil webpack - js 配置

### 请求服务器数据
请求的模块 axios   &  vue-axios
1. 安装  yarn add xxx
2. 引入
```javascript
// import axios from 'axios'  //不能用use 所有引入下面的孩子额个
import axios from 'vue-axios'

Vue.use(axios)  //* 重要

export default {

}
```

**跨域问题**

index.js中配置代理
