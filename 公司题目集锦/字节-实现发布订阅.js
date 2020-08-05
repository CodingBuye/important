/**
 * 事件类：包含功能——绑定事件、解绑事件和派发事件
 * 
 * on(eventName, func)：监听eventName事件，事件触发时调用func函数
 * emit(eventName, arg1, arg2, arg3, arg4)：触发eventName事件，并且把参数arg1，arg2，arg3，arg4等传给事件处理函数
 * off(eventName, func)：停止监听某个事件
 * 
 * 参考：https://zhuanlan.zhihu.com/p/60324936
 */
class Event {
    constructor() {
        // 储存事件的数据结构
        // 为查找迅速，使用对象(字典)
        this._cache = {};
    }

    // 绑定
    on(type, callback) {
        /**
         * 为了按类朝朝方便和节省空间
         * 将同一类型的事件放到一个数组中
         * 这里的数组是队列，遵循先进先出
         * 即新绑定的事件先触发
         */
        let fns = (this._cache[type] = this._cache[type] || []);
        if(fns.indexOf(callback) !== -1) {
            fns.push(callback);
        }
        return this;
    }

    // 触发
    trigger(type, data) {
        let fns = this._cache[type];
        if(Array.isArray(fns)) {
            fns.forEach(fn => {
                fn(data);
            })
        }
        return this;
    }

    // 解绑
    off(type, callback) {
        let fns = this._cache[type];
        if(Array.isArray(fns)) {
            if(callback) {
                let index = fns.indexOf(callback);
                if(index !== -1) {
                    fns.splice(index, 1);
                }
            } else {
                fns.length = 0;
            }
        }
        return this;
    }
}