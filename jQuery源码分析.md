# jQuery原理与机制

### 需求的产生

gelElementById太长了


```
var jQuery = function ( selector, context ) {
 return new jQuery.fn.init( selector, context, rootjQuery );
}
jQuery.fn=jQuery.prototype={
	jquery: core_version,
     init: function (selector,context){
     	// some code
     	return this;
     }
}

jQuery.fn.init.prototype=jQuery.fn;
```
