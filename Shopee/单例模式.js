/**
 * 单例模式是创建型设计模式的一种，针对全局仅需一个对象的场景，如线程池、全局缓存、window对象等
 * 
 * 模式特点：
 * 1. 类只有一个实例
 * 2. 全局可访问该实例
 * 3. 自行实例化（主动实例化）
 * 4. 可推迟初始化，即延迟执行（与静态类/对象没啥区别）
 * 
 * https://juejin.im/post/5d11bcdcf265da1b94215726
 */
class Singleton {
    constructor(name) {
        this.name = name;
        this.getName();
    }

    getName() {
        return this.name;
    }
}

let proxy = (function(){
    let instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

let a = new proxy('aaa');
let b = new proxy('bbb');
console.log(a.getName());
console.log(b.getName());
console.log(a === b);