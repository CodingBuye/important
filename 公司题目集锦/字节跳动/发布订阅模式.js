let observer_ids = 0;
let observed_ids = 0;

// 发布者
class Pub {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.id = observed_ids++;
    }

    publish(type) {
        this.dispatcher.publish(type, this);
    }
}

// 订阅者
class Sub {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.id = observer_ids++;
    }

    subscribe(type) {
        this.dispatcher.subscribe(type, this);
    }

    doUpdate(type, args) {
        console.log(`${type}接收到消息${args}`);
    }
}

class Dispatcher {
    constructor() {
        this.dispatcher = {};
    }

    // 订阅
    subscribe(type, subscriber) {
        if(!this.dispatcher[type]) {
            this.dispatcher[type] = [];
        }
        this.dispatcher[type].push(subscriber);
    }

    // 退订
    unsubscibe(type, subscriber) {
        let subscribers = this.dispatcher[type];
        if(!subscribers || !subscribers.length) return;
        this.dispatcher[type] = subscribers.filter(item => {
            return item.id !== subscriber.id;
        })
    }

    // 发布
    publish(type, args) {
        let subscribers = this.dispatcher[type];
        if(!subscribers || !subscribers.length) return;
        subscribers.forEach(sub => {
            sub.doUpdate(type, args);
        })
    }
}

class Reader extends Sub {
    constructor(name, dispatcher) {
        super(dispatcher);
        this.name = name;
    }

    doUpdate(type, st) {
        console.log(`${this.name}阅读了--${type}--公众号的文章`);
    }
}

class Wechat extends Pub {
    constructor(name, dispatcher) {
        super(dispatcher);
        this.name = name;
    }

    publishArticle(type) {
        this.publish(type);
    }
}

let dispatcher = new Dispatcher();
// 公众号
let wei1 = new Wechat("前端", dispatcher);
let wei2 = new Wechat("数据库", dispatcher);

// 读者们
let reader1 = new Reader("小玲", dispatcher);
let reader2 = new Reader("小明", dispatcher);
let reader3 = new Reader("小李", dispatcher);

reader1.subscribe("前端");
reader2.subscribe("数据库");
reader3.subscribe("数据库");

//公众号发布文章
wei1.publishArticle("前端");
wei1.publishArticle("数据库");