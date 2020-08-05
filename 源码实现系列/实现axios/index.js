const methods = ['get', 'post', 'head', 'options', 'put', 'patch', 'delete'];

class InterceptorsManage {
    constructor() {
        this.handlers = [];
    }

    use(fulfilled, rejected) {
        this.handlers.push({
            fulfilled, 
            rejected
        })
    }
}

class Axios {
    constructor() {
        this.interceptors = {
            request: new InterceptorsManage,
            response: new InterceptorsManage
        }
    }

    request(config) {
        // 
        let chain = [this.sendAjax.bind(this), undefined];

        // 请求拦截
        this.interceptors.request.handlers.forEach(interceptor => {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        })
        // 响应拦截
        this.interceptors.response.handlers.forEach(interceptor => {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        })

        let promise = Promise.resolve(config);
        while(chain.length > 0) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    }

    sendAjax(config) {
        return new Promise(resolve => {
            const {url = "", method = "get", data={}} = config;
            // 发送ajax请求
            const xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onload = function() {
                console.log(xhr.responseText);
                resolve(xhr.responseText);
            }
            xhr.send(data);
        })
    }
}

methods.forEach(item => {
    Axios.prototype[item] = function() {
        console.log(`执行${item}方法`);
        // 处理单个方法
        if(['get', 'delete', 'head', 'options'].includes(item)) {
            // 两个参数（url, [config]）
            return this.request({
                method: item,
                url: arguments[0],
                ...arguments[1] || {}
            })
        } else {
            return this.request({
                method: item,
                url: arguments[0],
                data:arguments[1] || {},
                ...arguments[2] || {}
            })
        }
    }
})

// 工具方法
const utils = {
    extend(a, b, context) {
        for(let key in b) {
            if(b.hasOwnProperty(key)) {
                if(typeof b[key] === 'function') {
                    a[key] = b[key].bind(context);
                } else {
                    a[key] = b[key];
                }
            }
        }
    }
}

// 最终导入axios的方法，即实例的request方法
function CreateAxiosFn() {
    let axios = new Axios();
    let req = axios.request.bind(axios);
    // 混入方法
    utils.extend(req, Axios.prototype, axios);
    utils.extend(req, axios);
    return req;
}

// 得到最后的全局变量axios
let axios = CreateAxiosFn();