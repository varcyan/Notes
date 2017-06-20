# 浏览器加载js的阻塞和非阻塞

1、js在浏览器中的阻塞

  常规理解就是浏览器在加载js时候会阻塞浏览器的渲染操作，但页面性能决定不希望我们在加载js的时候影响页面的渲染，所以我们经常会把js文件放到body之前去加载。而不会把它放在head里去阻塞页面的渲染。那么问题来了，如果我们把js放在head里，浏览器是怎么去执行它的呢，是按顺序加载还是并行加载呢？

其实在旧的浏览器下，都是按照先后顺序来加载的，这就保证了加载的js依赖不会发生问题。但是新的浏览器已经开始允许并行加载js了，也就是说我可以同时下载js文件，但是还是先后顺序执行文件的。

2、document.write 使用

我们一般会用document.write来生成一段广告，经常这样操作：document.write('<script id="posAD" type="text/[JavaScript](http://lib.csdn.net/base/javascript)" src="http://192.168.3.107:888/control.js?platformcode=tcy&postioncode=A1&filecode=10030"><\/script>');

这样操作也是阻塞的；有同学就问了，你这是外联js,那么内链的呢，我也做过测试，一样的，同样会阻塞。

这样使用的时候一定要记住，要确保他是在dom ready之前去执行，否则它将会重新渲染整个页面。

3、那么如何实现非阻塞呢，那么就需要动态加载js了，通过appendChild(script)这种方式去异步加载js了，其实还可以用xhr对象来处理，但是这样只能解决非跨域问题，跨域xhr就无能为力了。还有一种办法就是新浏览器的defer 和 async 属性了，这样你把它写到head里也不会阻塞浏览器的渲染了。

 

于是在我明白上述的这样东东之后，我简单的实现一个动态加载js模块：

```
    //loadJS模块
    (function () {

      var loadJS = function (deps, callback) {
        if(typeof deps == 'string') {
          deps = [deps];
        }

        var len = deps.length;
        var   j = 0 ;
        var  fn = function (){
              j++;
              if(j == len) {
                callback.apply(window);
              }
        };

        for(var i = 0 ; i < deps.length ; i++) {
               _loadMod(deps[i],fn);       
        };
      };

      var _loadMod = function(url,fn) {
        var    head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
        var  script = document.createElement('script');
             script.type = 'text/javascript';
             script.charset = 'utf-8';
             script.async = true;
             script.src = url;
             script.onload = script.onreadystatechange = function() {
             if (!script.readyState || script.readyState in {'loaded': 1, 'complete': 1}) {
                    script.onload = script.onreadystatechange = null;
                    fn();
                    head.removeChild(script);
                    script = null;
                }
             }
             head.insertBefore(script, head.firstChild);
       } 

       window.loadJS = loadJS;

    })();
```

以上内容也是我这两天初步终结出来的，有不对的地方还希望各位童鞋指正。

有兴趣的还可以参考这两篇博客：http://www.w3cfuns.com/blog-5443287-5401014.html 或则 http://www.cnblogs.com/hongcaomao/archive/2012/03/27/javascript_loadad.html