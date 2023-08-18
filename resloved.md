1. border什么时候会出现非矩形（破坏条件）

   - 相邻的两条边
   - 颜色不一样

2. `background-attachment:fixed` 背景固定后不见了/尺寸发生位移

   始终显示在浏览器可视区域（以body原点为起始点），不会跟随滚动条滚动背景图定位的参照物发生改变

3. 空格大小的偏差（宋体下空格大小是当前字号的一半）

   - 父元素没有设置字体大小，<a>标签之间空格来自与换行符大小是默认字号16px/2px；
   - 给父元素设置字号，改变空格大小；

4. 行内元素与块级元素line-height之间的偏差

   一般把line-height设置给父元素

5. 父级元素的显示方式

   如果设置了高度，只显示可视范围内的元素，可视范围外的元素依然存在，只是在不可视区；

   如果没有设置高度，父级元素会被撑开（margin值同样可以撑开，但父级固定高度margin将会到父级外面，但不会影响父级元素下的元素位置。）

6. 文字超出盒子外面

   正常情况是自动换行，超出是因为文字（英文，数字）没有隔断，被当作一个单词。

7. 单词(文字)换行的问题

   给当前单词添加强制不换行，`word-space:nowrap`

8. img的空隙问题边框问题

   ```scss
   img {
     vertical-align: top;
     border: none;
   }
   ```

9. margin的问题

   margin-top传递；子集的margin-top传递给父级 -> 给父级元素加边框

   margin上下重叠；设置合适的值（委屈）

10. float触发了BFC但是不能设置margin: 0 auto;

    margin: 0 auto;针对于文档流计算 float脱离文档流，且float与margin: 0 auto;相斥，浏览器选择了前者

    float元素本身的margin-top不再被传递

11. 微软雅黑字体是基数时，默认在其上面加1px

12. 在有需要包裹图片的盒子，设置overflow:hidden;防止图片过大影响布局

13. 图文混合只显示背景图文字看不到

    高度设置为0，用padding撑开盒子，文字被挤到盒子外面，overflow:hidden;益处隐藏；

14. 行内元素文字缩进不生效(行内元素未必支持所有CSS命令)

15. margin负值问题

    当元素没有固定的width时，margin负值会增加元素的宽度；

    文档宽度=content+padding+border+margin

    父级

    设置正margin会使元素占位变大

    子集

    设置正margin会使父级元素变大

    设置负margin会使父级元素变小

16. 水平居中

    text-align: 可以居中inline/inline-block元素以及文字；（可居中整个元素包括文字也同时居中）

    内联元素和内联块不支持margin: 0 auto;

    margin: 0 auto; 可以居中block元素

    block元素独占一行，无法使用text-align:center;居中；

17. 父元素不能使用text-align居中浮动的子元素（不在一个层级，文档的对其方式已经无法控制它了）

18. z-index设置层级无效

    z-index应用于兄弟元素之间的比较

19. table表格中清除td默认“pandding”后依然存在

    table默认使文字居中的样式，设置行高后依然存在，因此建议使用固定高度；

    tr无法设置背景颜色；

20. 元素使用dispaly:block展示，改变了元素的行内属性

    使用display: inline-block;也可以使元素展示出来； 

21. position与float

    在父元素具有position:absolute/fixed的样式下 子元素浮动，会撑开父级高度

   （父级本身脱离了文档流，因此在文档流外，子元素浮动撑开了父级）（需要注意绝对定位元素默认内容撑开盒子大小）

22. IE6使用js处理图片（相对较大的）后，最大父级底部多出10px;
    1. 给出现问题的最大父级加position: relative;
    2. 使用jpg图片;


23. border：1px在移动端不用使用rem单位

    因为其他大小是需要根据设备变化的，而1px的边框没有变大的需求。

24. :before/:after需要注意的问题

    未显示：要结合content使用；

    :before和:after开始的地方是从元素的内容（content）区域开始计算的；

25. 改变分辨率后模块顺序与html顺序相斥

    解决：使用弹性盒模型，使用order改变模块的展示顺序；

26. IE6下浮动元素父级设置右边的padding值无效（内容仍然会进入padding区域）

    原因：可能与IE版本有关；在其版本中对浮动元素与padding值之间的解析出现了其他表现；

    解决方案：使用margin替代padding，预留出位置。

27. IE6下同级上下结构元素,上面元素未浮动,下面元素浮动,父级wrap下面会出现与上面元素margin-bottom等大空隙；
    1. 给浮动元素嵌套清除浮动盒子;
    2. 去除div1的margin-bottom，给div2设置margin-top;
    3. 同级元素最好都浮动;  


28. 淘宝商品详情页-商品介绍与店铺介绍栏中间的边框处理

    需求：未知是否等高 边框贯穿容器

    解决：为栏1设置右边框，栏2设置左边框，使两条边框重合；那么无论哪边的内容较多，中间的边框依然贯穿容器；

29. E:nth-of-type(2)的真正奥义

    首先判断E的标签类型，然后查找E父元素中第二个该类型，且满足E条件；

30. for循环里的定时器中的函数无法获取到i的值（因for循环是瞬间执行，定时器有其执行时间）

    使用函数自执行存取i

31. 谁调用this就是谁
32. 变量函数同名的情况下，同一个标识符的情况下，函数声明会覆盖变量声明，但不会覆盖已经被赋值的变量（无论顺序），即：如果声明变量的同时初始化或赋值那么变量优先级高于函数。
33. typeof b; //undefined  b未定义，typeof b是undefined；

33. if (function f(){}) { console.log(true) };  //ture;

34. var s = '1s' s++; // NaN  ++做的是数学运算

35. []==![] //true   

    '!' obg   会把对象转化为布尔值 false

    布尔值与对象进行比较  会先把布尔值转化为数字，

37. 函数中this的指向，实在调用函数的时候确认的

38. js中的连等（连续等号）赋值的问题

    对于 类似 A=B 的表达式，首先计算A表达式，得到 lref；

    然后计算计算表达式 B，得到 B 的值 rval；

    将 rval 赋给 lref 指向的变量，返回 rval。

    foo.x = foo = {n:2} 等价于 **foo.x = ( foo = { n : 2} )**

39. 在if (false) { var m = 1; } 条件不成立但是var声明依然是会被提升的，因为js中是以作用域划分的

40. ajax测试的时候出现一大段文字

41. get方法请求地址(url)后没有加 search (?user=val)

42. post方法send时没有传入数据 (user=val)

43. ios背景模糊

    backdrop-filter: blur(10px);

44. transform: rotate(180deg)无效

    为元素增加 display :inline-block;