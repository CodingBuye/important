function Dep() {
    this.subs = [];
}

Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
}

Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update());
}

function Watcher(fn) {
    this.fn = fn;
}

Watcher.prototype.update = function() {
    this.fn();
}

var dep = new Dep();
dep.addSub(new Watcher(function(){
    console.log('amd yes');
}));

dep.notify();