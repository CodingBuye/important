## location.hash+iframe跨域

实现原理：
```
a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。
```

具体实现：
```
A域：a.html -> B域：b.html -> A域：c.html，
a与b不同域只能通过hash值单向通信，
b与c也不同域也只能单向通信，
但c与a同域，所以c可通过parent.parent访问a页面所有对象。
```

### a.html(http://www.domain1.com/a.html)
```
<iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"> </iframe>
<script>
    var iframe = document.getElementById('iframe');

    // 向b.html传hash值
    setTimeout(function() {
        iframe.src = iframe.src + '#user=admin';
    }, 1000);
    
    // 开放给同域c.html的回调方法
    function onCallback(res) {
        alert('data from c.html ---> ' + res);
    }
</script>
```
### b.html：(http://www.domain2.com/b.html)
```
<iframe id="iframe" src="http://www.domain1.com/c.html" style="display:none;"></iframe>
<script>
    var iframe = document.getElementById('iframe');

    // 监听a.html传来的hash值，再传给c.html
    window.onhashchange = function () {
        iframe.src = iframe.src + location.hash;
    };
</script>
```

### c.html：(http://www.domain1.com/c.html)
```
<script>
    // 监听b.html传来的hash值
    window.onhashchange = function () {
        // 再通过操作同域a.html的js回调，将结果传回
        window.parent.parent.onCallback('hello: ' + location.hash.replace('#user=', ''));
    };
</script>
```