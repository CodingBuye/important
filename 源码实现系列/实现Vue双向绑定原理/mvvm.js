// 创建一个Mvvm构造函数
function Mvvm(options = {}) {
    // vm.$options Vue上是将所有属性挂载到上面
    // 所以我们也同样实现,将所有属性挂载到了$options
    this.$options = options;
    // this._data 这里也和Vue一样
    let data = this._data = this.$options.data;

    /**
     * 数据劫持:
     * 观察对象，给对象增加Object.defineProperty
     * vue特点是不能新增不存在的属性 不存在的属性没有get和set
     * 深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)
     */
    observe(data);
    
    /**
     * 数据代理：数据代理就是让我们每次拿data里的数据时，不用每次都写一长串，如mvvm._data.a.b这种，
     * 我们其实可以直接写成mvvm.a.b这种显而易见的方式
     * 
     * this代理this._data
     */
    for(let key in data) {
        Object.defineProperty(this, key, {
            configurable: true,
            get() {
                return this._data[key];
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }

    /**
     * 数据编译
     */
    new Compile(options.el, this);
}

// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data) {
    let dep = new Dep();
    // 所谓数据劫持就是给对象增加get,set
    // 先遍历一遍对象再说
    for(let key in data) {
        let val = data[key];
        observe(val);
        Object.defineProperty(data, key, {
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);  // 将watcher添加到订阅事件中 [watcher]
                return val;
            },
            set(newVal) {
                if(newVal === val) return ;
                val = newVal;
                observe(newVal);
                dep.notify();  // 让所有watcher的update方法执行即可
            }
        })
    }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
    if(!data || typeof data !== 'object') return;
    return new Observe(data);
}

// 创建Compile构造函数
function Compile(el, vm) {
    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el);
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment();
    while(child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }

    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;

            if(node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
                console.log(RegExp.$1);  // 匹配到的第一个分组 如：a.b, c
                let arr = RegExp.$1.split("."); 
                let val = vm;
                arr.forEach(item => {
                    val = val[item];
                });
                node.textContent = txt.replace(reg, val).trim();

                // 监听变化
                // 给Watcher再添加两个参数，用来取新的值(newVal)给回调函数传参
                new Watcher(vm, RegExp.$1, newVal => {
                    node.textContent = txt.replace(reg, newVal).trim();
                });
            }

            if (node.nodeType === 1) {  // 元素节点
                let nodeAttr = node.attributes; // 获取dom上的所有属性,是个类数组
                Array.from(nodeAttr).forEach(attr => {
                    let name = attr.name;   // v-model  type
                    let exp = attr.value;   // c        text
                    if (name.includes('v-')){
                        node.value = vm[exp];   // this.c 为 2
                    }
                    // 监听变化
                    new Watcher(vm, exp, function(newVal) {
                        node.value = newVal;   // 当watcher触发时会自动将内容放进输入框中
                    });
    
                    node.addEventListener('input', e => {
                        let newVal = e.target.value;
                        // 相当于给this.c赋了一个新值
                        // 而值的改变会调用set，set中又会调用notify，notify中调用watcher的update方法实现了更新
                        vm[exp] = newVal;   
                    });
                });
            }
            // 如果还有子节点，继续递归replace
            if(node.childNodes && node.childNodes.length) {
                replace(node);
            }
        })
    }

    replace(fragment);  // 替换内容
    vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}

/**
 * 发布订阅模式  订阅和发布 如[fn1, fn2, fn3]
 */
function Dep() {
    // 一个数组(存放函数的事件池)
    this.subs = [];
}

Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
}

Dep.prototype.notify = function() {
    // 绑定的方法，都有一个update方法
    this.subs.forEach(sub => sub.update());
}
// 监听函数
// 通过Watcher这个类创建的实例，都拥有update方法
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;
    let arr = exp.split(".");
    let val = vm;
    arr.forEach(key => {
        val = val[key]; // 获取到this.a.b，默认就会调用get方法
    });
    Dep.target = null;
}

Watcher.prototype.update = function() {
    // notify的时候值已经更改了
    // 再通过vm, exp来获取新的值
    let arr = this.exp.split('.');
    let val = this.vm;
    arr.forEach(key => {    
        val = val[key];   // 通过get获取到新的值
    });
    this.fn(val); // 将每次拿到的新值去替换{{}}的内容即可
}

// // 测试
// let watcher = new Watcher(() => console.log(111));  // 
// let dep = new Dep();
// dep.addSub(watcher);    // 将watcher放到数组中,watcher自带update方法， => [watcher]
// dep.addSub(watcher);
// dep.notify();   //  111, 111