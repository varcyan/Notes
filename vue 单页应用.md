# Vue单页应用
## intro
- 在一个页面中
- 初始加载html css js
- 不会重新加载js css,也不会跳转页面
- js来动态变化html

> 使用vue-router来变化视图(本质上使用的是hash值的不同映射不同的视图)

\-----
路由库
把路由和视图做一个映射
\-----

## 过程
1. `main.js` 入口文件
  ```javascript
  // 通过import引入 (`vue`入口 `app`组件入口)
  import Vue from 'vue'
  import App from './App'
  import Router from 'vue-router'  //引入router 详情见package.json文件
  //使router作为vue的插件用
  Vue.use(VueRouter)
  var r = new VueRouter() 创建一个实例并注册
      传入一个对象，routes是一个数组，在這里规定目录与视图
    Vue实例中加入 router：r
   ```
   **import**
   import 定义名称 from '路径'

2. components下创建一个vue文件
3. 在main.js里配置  routes数组中加入
  首先引入 import Home from '@components/home'
    '@'是指src目录下
  {
    path: '/',

  }
4. 在app.vue下告诉它要显示在哪儿
  使用router-view标签就可以
5. 新建一个router文件夹 下 index.js 把路由写在那里
  并把index文件引入main.js '@/router'
  所有的配置都在index里写 export default router 吧這个实例暴露出去
 6. 动态路由 多个视图使用同一个模板
  path: 'user/:id?' id可以出现0次或1次
 7. 路由信息对象
  如果在模板里 {{ $router }}
  获得路由信息 {{ $router.params.id }}
8. 钩子函数

  beforeRouteEnter (){
    // 匹配到路由之后，即将展示视图之前
    // 不能用组件实例this 因为还没有创建实例
    // 只会调用一次
  }
  **参数**
  to   【obj】到哪儿   目标路由
  from 【obj】从哪儿来 离开的路由
  next 【fn】一定要调用next next决定要不要进入视图
    回掉函数的参数是示例
  beforeRouteUpdate(){
      this 指向实例
      // 在路由给你个新的时候
    }
9. 链接
  a href="#/user/1"
  router-link to=""
  to="路径" 相对于当前目录
  to="/路径" 相对于根目录
 10. watch 监控$route对象
 12. 给路由命名 nameg

---
src
| - assets - css
| - components - 公共文件
| - views - 私有视图

|- main.js
  导入 css 的入口文件
  require('./assets/css/app.css')

 先写首页的组件
 引入header
  在需要的文件中import 引入，并在export default 暴露注册 components:{customHeader }
meta: {requiresAuth： true} 需要登陸


.gitignore

package.json  dependencies 打包需要


webpack 打包  
vue-cil webpack - js 配置
