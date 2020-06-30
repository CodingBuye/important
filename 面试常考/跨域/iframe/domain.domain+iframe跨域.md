## document.domain + iframe跨域
此方案仅限主域相同，子域不同的跨域应用场景

实现原理：
```
两个页面都通过JS强制设置document.domain为基础主域，就实现了同域。
```
### 父窗口：http://www.domain.com/a.html
```
<iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
<script>
	document.domain = "domain.com";
	var user = "admin";
</script>
```

### 子窗口：http://child.domain.com/b.html
```
<script>
	document.domain = "domain.com";
	// 获取父窗口中的变量
	alert("get js data from parent"+window.parent.user);
</script>
```