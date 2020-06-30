## 跨域资源共享cors
普通跨域请求：
```
只服务端设置Access-Control-Allow-Origin即可，前端无须设置，
若要带cookie请求：前后端都需要设置。
```

需注意的是：
- 由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。如果想实现当前页cookie的写入，
- 可参考下文：
	- nginx反向代理中设置proxy_cookie_domain 
	- NodeJs中间件代理中cookieDomainRewrite参数的设置。

目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。
