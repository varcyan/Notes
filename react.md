# react
## ing
1. 需要用到脚手架搭建基础设施
  create-react-app
  github: http://github.com/facebookincubator
2. 安装
  先安装一个包管理工具
  yarn
  npm install -g create-react-app
3. 安装脚手架工具
  npm install -
4.


## x
1. index.js
  ```
  // 引入react
  import React from 'react'
  // react辅助
  import ReactDOM from 'react-dom'

  // ex
  ReactDOM.render(
    // 這里可以直接写html结构，但注意一定要在顶层包一层

    <h1>hi</h1>
    <ul></ul>
    document.getElementById('root');
  )
  ```
  index.html 要告诉它渲染的位置
  ```
  <div id="root"></div>
  ```
  定义组件的地方 test.js
  ```
  // 先引入react
  import React from 'react'

  // 定义组件
  class List extends React.Component {
    // 最起码要有一个render函数
    render () {
      // 组件的样子取决于return的值(最外层只能有一层)
      return （<h3>定义的组件</h3>）
    }
  }

  // 把组件导出
  export default List
  ```
  在`index.js`中引入组件
  ```
  import List from './component/test'
  ```



let h = <h1></h1>;  //react元素

class H extends React.Component {
  render (){
    return <h1>{arr}</h1>
  }
}

let arr = [<span></span>, <span></span>];

ReactDOM。render(
  要渲染的内容，
  渲染的位置,
  回掉函数
)
**通信**
父组件通知子组件 this.props
子组件通知父组件 通过函数传参数
