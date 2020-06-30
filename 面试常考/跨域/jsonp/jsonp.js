// 自己封装一个JSONP函数
function jsonp({url, params, callback}) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		window[callback] = function(data) {
			resolve(data);
			document.body.removeChild(script);
		}

		params = {...params, callback};
		let arr = [];
		for(let key in params) {
			arr.push(`${key}=${params[key]}`);
		}
		script.src = `${url}?${arr.join('&')}`;
		document.body.appendChild(script);
	})
}

// jQuery的JSONP行hi
$.ajax({
	url: 'http://cross.domain.com/jsonpServerResponse',
	dataType: 'jsonp',
	type: 'get', // 可以省略
	jsonpCallback: 'show', // 自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
	jsonp: 'callback', // 传递函数名的那个形参callback，可省略
	success: function(data) {
		console.log(data);
	}
})