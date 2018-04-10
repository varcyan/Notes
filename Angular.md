# Angular

## 版本 1.3.0 介绍

1. 放弃了IE8

2. 引入了单项数据绑定

3. 删掉了一堆过时的API（为了升级准备）

**四大核心特性**

1. MVC

   1. model (数据模型)- controller（业务逻辑和控制逻辑） - view（视图）
   1. 为什么23种设计模式种没有MVC？

1. 模块化

   ag如何实现模块化

   ```
   var myModule = angular.module("name",[]);
   myModule.controller("name",['$scope', function () {
       $scope.greeting = {
           text: 'hel'
       }
   }])
   ```

   ```
   <html ng-app="moduleName"></html> // 单个应用中只能又一个ng-app
   ```

1. 指令系统

   directive

   ```
   var myModule = angular.module('MyModule',[]);
   myModule.directive("hello", function () {
       return {
           restrict: 'E',
           template: '<div>Hi everyone!</div>',
           replace: true
       }
   })
   ```

   ```
   <hello></hello>
   ```

   ​

1. 双向数据绑定

   ```
   <input ng-model="greeting.text" />
   <p>{{greeting.text}},AngularJS</p>
   ```

**question**

- 为什么其他所有前端框架都不实现双向数据绑定
- 如果让你来实现双向数据绑定，你会怎么去实现
- 双向数据绑定机制有什么潜在缺点嘛

## 搭建环境

- 代码编辑工具
- 断点调试工具
- 版本管理工具
- 代码合并和混淆工具
- 依赖管理工具
- 单元测试工具
- 集成测试工具

### 常用的前端开发工具

- chrome插件 AngularJS Batarang

- grunt
  - grunt-contrib-uglify 对代码进行混淆
  - grunt-contrib-concat 合并文件
  - grount-contrib-watch 监控文件变化

- bower
  - 自动安装
  - 依赖关系

- http-server
  - 可以把本地代码启用服务

- karma (单元测试)
  - karma-jasmine(分组、用例、期望、匹配)
    - describe(string,function) 表示分组、一组测试用例
    - it(string,function) 表示测试用例
    - expect(expression) 表示期望expression这个表达式具有某个值或某种行为
    - to***(arg) 表示匹配

  - karma-coverage (代码覆盖率)

  - karma-chrome-launcher

    karma start

- protractor (专门为AngularJS定制的测试工具)

  - 基于webDirvers

### 基本的目录结构

web

 - .git
 - src (源代码)
- node_moudules (依赖)
- test (测试用例)
  - e2e (集成测试)
  - unit (单元测试)



## 基本概念和用法

### 为什么需要MVC

- 代码规模越来越大，切分职责
- 为了复用： 很多逻辑是一摸一样的
- 为了后期维护方便，修改一块功能不影响其他功能

MVC只是手段，终极目标是模块化和复用

### 前端实现mvc的困难

JS脚本的阶段：浏览器加载脚本、加载完成之后JIT编译执行

- 操作DOM代码必须等待页面全部加载完成
- 多个JS文件之间如果出现互相依赖，程序员必须自己解决
- JS的原型继承也给前端带来了困难

### ng中的MVC

- controller 控制器
  - 负责在数据和视图进行双向交互
  - 一个控制器控制一个视图
    - 如果有公用的部分 使用一个service，而不是通用控制器

controller注意点：

- 不要试图复用Controller,一个控制器一般只负责一小块视图
- 不要再Controller中操作DOM，这不是控制器的职责
- 不要再Controller里面做数据格式化，ng有很好用的表单控件
- 不要在Contrller中做数据过滤操作，ng有$filter服务
- 一般来说，Controller是不回互相调用的，控制器之间的交互会通过事件进行

































