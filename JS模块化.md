# JS模块化

### 开发中存在的问题：

当网站越来越复杂的时候，开发公用的组件库；  

-   冲突： 多人开发避免运用到库中的标识符：
    -   命名空间，将方法和属性挂载在对象身上
        -   弊端：名字比较长调用时需要加前缀，只能降低冲突，


-   依赖： js文件之间存在依赖关系，当组件升级增加依赖文件时，每个页面都要增加相应的依赖文件

### 模块的概念

模块： 依据功能划分的文件，文件之间相互依赖形成了模块系统

### Sea.js库

可以解决js文件之间的**冲突**和**依赖**，提升代码的可维护性

#### seajs如何解决

导入seajs文件

1.  **定义模块:**使用define定义模块

    ```javascript
    define(function (require,exports,module){	
      // 把普通模块变成了sea下的模块
      function show () {
        alert('这里时show')
      }
      exports.show = show;
    })
    ```
    **注意：** sea下的参数时不允许修改的，要使用规定的参数名称  

    define回掉函数中的**参数**：  

    -   require： 模块之间依赖的接口，引入依赖的模块
    -   exports: 对外提供接口
    -   module: 当前模块的一些信息
        -   module.id
        -   module.url ‘模块绝对路径’
        -   module.dependencies ‘依赖文件的数组’
        -   module.exports  '==export' 添加多组变量或方法时使用这个添加

2.  **调用模块** 使用seajs.use;

    ```
    seajs.use('./js/module1.js', function (ex){
      ex.show();
    })
    ```
    **seajs.use方法的参数**： 

    -   模块的地址
    -   使用相对地址  
        -   ex => exports

3.  如何**依赖模块** 

    在模块中用参数`require`引入依赖的模块,当引入的时sea下模块的时候，require执行完的结果就时export

    ```
    var a = require('./module2.js').a;
    ```

    require异步加载模块
    ```
    require.async('.js/main.js', function (){
    		console.log('模块加载完的回调')
    })
    ```

### 模块化的历史

服务器端必须模块化，模块化要有规范

-   nodejs的出现 （09）
    -   commonJS规范
-   浏览器JS的模块化？
    -   AMD规范
        -   requireJS库
    -   CMD规范
        -   seaJS采用的规范

### 构建工具 gruntJS 

**安装：**  

-   先安装nodejs和npm包管理器
-   通过npm命令行安装 http://www.gruntjs.net/getting-started

**基本使用：**

-   下载grunt相应的插件 contrib-concat（用于合并）

-   将插件引入到项目中，通过自己配置package.json，进入项目文件 npm install 会把插件加载到文件中

    ```
    {
      "name": "my-project-name",
      "version": "0.1.0",
      "devDependencies": { // 这里时插件列表
        "grunt": "~0.4.5",
        "grunt-contrib-concat": "~0.10.0",
      }
    }
    ```

-   Gruntfile.js 配置

    ```javascript
    module.exports = function (){
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {	// 合并
          project-name: {
            files: {	// 合并完成后的文件： 要合并的文件
              'dist/main.js': ['main.js','drag.js','scale.js','range.js']
            }
          }
        },
        uglify: {	// 压缩
          project-name: {
            files: {	// 压缩完成后文件： 要压缩的文件
              'dist/main.min.js': ['dist/main.js']
            }
          }
        }
      });
      grunt.loadNpmTasks('grunt-contrib-concat');  
      grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ['concat', 'uglify']);
    }
    ```

-   cmd 运行 grunt,就开始构建了

**grunt压缩插件：**contrib-uglify

### seajs构建后的问题

sea中依据路径引入的依赖文件失效，因为被合成一个文件

sea中提供了方法，在上线的版本比如合并操作：define要多出两个参数：

1.  当前模块的ID （当前模块的路径）
2.  依赖模块的数组（子项目是依赖的地址）

```
define('./main.js',['./drag.js', './scale.js'],function (require,exports,module){
}
```

#### seajs和gruntjs结合开发

1. seajs是基于CMD（common moudle definition）规范的, 与gruntjs结合开发需要安装gruntjs插件：

\>> grunt-cmd-transport // 提取id和依赖  
\>> grunt-cmd-concat    // 合并  

2.  package.json 配置 (或者直接使用npm单个安装)，npm install

  ```
  {
    "name": "my-project-name",
    "version": "0.1.0",
    "devDependencies": { // 这里时插件列表 插件名称：使用的版本号
      "grunt": "~0.4.5",
      "grunt-cmd-transport": "~0.3.0",
      "grunt-cmd-concat": "~0.2.7",
      "grunt-contrb-uglify": "~0.0.0"
    }
  }
  ```

3.  Gruntfile.js 配置

    ```JavaScript
    module.exports = function (){
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        transport: {	// 提取id和依赖
          project-name: {
            files: {	// 提取完后放在哪里： 需要提取的文件
              '.build': ['main.js','drag.js','scale.js','range.js']
            }
          }
        },
        concat: {
          project-name: {
            files: {	// 合并后的文件： 需要合并的文件(这里注意是提取完ID和依赖的文件)
              '.dist/main.js': ['.build/main.js','.build/drag.js','.build/scale.js','.build/range.js']
            }
          }
        },
        uglify: {	// 压缩
          project-name: {
            files: {	// 压缩完成后文件： 要压缩的文件
              'dist/main.min.js': ['dist/main.js']
            }
          }
        }
      });
      grunt.loadNpmTasks('grunt-cmd-transport');  
      grunt.loadNpmTasks('grunt-cmd-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      // 要执行的任务
      grunt.registerTask('default', ['transport',concat', 'uglify']);
    }
    ```


contrib-clean 可以清除插件

### seajs的配置

-   alias: 别名配置
-   paths: 路由配置
-   vars: 变量配置
-   map: 映射配置
-   preload: 预加载项
-   debug: 调试模式
-   base: 基础路径
-   charset: 文件编码

### 
