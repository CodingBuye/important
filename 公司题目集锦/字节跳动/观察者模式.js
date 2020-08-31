let observer_ids = 0;
let observed_ids = 0;

class Observer {
    constructor() {
        this.id = observer_ids++;
    }

    update(ob) {
        console.log(`观察者${this.id}-检测到被观察者${ob.id}的变化`)
    }
}

class Observed {
    constructor() {
        this.observers = [];
        this.id = observed_ids++;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => {
            return o.id !== observer.id;
        })
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update(observer);
        })
    }
}

let mObserved=new Observed();
let mObserver1=new Observer();
let mObserver2=new Observer();

mObserved.addObserver(mObserver1);
mObserved.addObserver(mObserver2);

mObserved.notify();
