// 1. 创建：可以用构造函数XMLHttpRequest()来创建XHR对象
var xhr = new XMLHttpRequest();

// 2. 指定请求的方法和url
// 第一个参数是不区分大小写的请求方法字符串,可以是“get”、“post”或“head”等；
// 第二个参数是请求URL，该URL需要满足同源策略的要求；
// 第三个参数是一个可选的布尔值，表示请求方式，默认使用异步方式，当设为false时，会变为同步方式
xhr.open("get", "server.php", true);

// 3. 指定请求首部
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlcoded");

// 4. 发送请求实体
xhr.send();

// 5. 处理响应
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            xhr.statusText;
            xhr.responseText;
            xhr.getResponseHeader("Content-Length");
            xhr.getAllResponseHeaders();
        }
    }
}