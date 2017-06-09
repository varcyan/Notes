# JS模块化

**模块**： 依据功能划分的文件，文件之间相互依赖形成了模块系统

**sea.js**  **grunt.js**

**开发中存在的问题：**

当网站越来越复杂的时候，开发公用的组件库；  

-   冲突： 多人开发避免运用到库中的标识符：
    -   命名空间，将方法和属性挂载在对象身上
        -   弊端：名字比较长调用时需要加前缀，只能降低冲突，


-   依赖： js文件之间存在依赖关系，当组件升级增加依赖文件时，每个页面都要增加相应的依赖文件

### Sea.js库

-   解决js文件之间的冲突和依赖，提升代码的可维护性

#### seajs如何解决

1.  导入seajs文件

2.  如何变成模块？

    通过define定义模块

    ```javascript
    // 1. 定义
    define(function (require,exports,module){	//sea下的参数时不允许修改的
      // 把普通模块变成了sea下的模块
      // require： 模块之间依赖的接口，引入依赖的模块
      // exports: 对外提供接口
      function show () {
        alert('这里时show')
      }
      exports.show = show;
    })
    ```

3.  调用模块 seajs.use();

    两个参数： 模块的地址,使用相对地址  

    ```
    seajs.use('./js/module1.js', function (ex){
      // ex => exports
      ex.show();
    })
    ```

4.  如何依赖模块 第一个参数`require`

    在模块中用参数`require`引入依赖的模块

    ​

    ​

