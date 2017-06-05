# vue-router\vue

### vue-router

**前端路由**  在web开发中。路由是根据url分配到对应的处理程序

**作用**  通过管理url实现url和组件的对应和通过url进行组件之间的切换

**应用**  单页应用，加载单个html页面，并在用户与应用程序交互时变换视图

**L加载**  单个html页面，按需加载（如试图过多时，用到哪个地方加载哪个地方）

#### 引入与应用

```javascript
import Router from 'vue-router'
// 作为插件使用(作为插件才能解析)
Vue.use(Router)
// 注入到实例中
```

#### url

localhost:8080/#/  
使用的是hash切换 定位到某个资源

localhost:8080/  
也可以使用history模式 在index.js中定义

```
mode: history
```



#### router-view

利用路由切换视图的容器

#### router-link

默认生成a标签。可以制定

```vue
//
<router-link to="/">首页</router-link>
```

#### 路由配置

```javascript
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
      	{
     		path: '/',
     		name:'Main',
      		component: Main      		
      	},
      	{
      		path: '/detail/:id?',
      		name:'Detail',
      		component:Detail
          	redirect: {	// 重定向
              path: '',
              name: '也可以到name路由'
          	},
        	redirect (to) {
              // to 是目标路径
        	  // return 后的是要定位到的路径地方
        	  return '/'	
        	}
      	}
      ]
    }
  ]
})
```



**高度**

```javascript
scrollBehavior(to, from, savaPosition){
	// to 到哪里去
	// from 从哪里来
	// savaPosition 
}
```

**钩子函数**

```
router.beforeEach((to,from,next) => {
	// to 目标点  to.path 要进入的路径
	// next(); 决定要不要进入视图
})
```

可以写在路由中 作为参数

```
beforeEnter () {
  
}
```

可以写在组件中 控制具体某一个组件

```
<script>
	export default {
      beforeRouterEnter () {
      	// 不能获取到当前组件的实例this 
      }
	}
</script>
```



config index.js

build

assetsPublicPath: '/dist/'



```
new Router({
	base: '/abc/'
})
```



### vuex

多个组件 共享一个数据时，可以把这个数据单独列出来用

更改的时候必须通过它提供的方法

在数据嵌套较多时使用

```javascript
import Vuex from 'vuex'
Vue.use(Vuex)
let store = Vuex.Store({
  // 创建状态
  state: {
    num : 0
  }
})
export default store

// 实例中注入 store


// 子组件中
export default {
  data(){
    return {
      // 这里会把数据写死 使用computed 计算属性
      num: this.$store.state.num
    }
  },
  computed: {
    num() {
      return this.$store.state.num
      //
      return this.$store.getters.numther
    }
  },
  methods: {
    // 想要改变num时 需要使用vuex的方法更改 要去vuex store中 mutations 定义
    this.$store.add();			// 触发mutations里的方法
    this.$store.dispatch('asyncAdd');	// 触发actions中的方法
  }
}
// store中定义方法 改变数据只能通过mutations
mutations: {	// 必须是同步的！如果异步使用actions
  add (state) {
    state.num++
  }
}
// 异步方法
actions: {
  asyncAdd(state) {
    
  }
}
// Getters
getters: {
  numother (state) {
    return state.num > 10? 10 : state.num
  }
}


```

### axios vue-axios

```
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)

this.$http.get('url')
.then((data) => {
  console.log(data)
})
.catch(() => {
  
})
```

