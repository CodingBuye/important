var obj = {x : 1};
function foo(o) {
    o.x = 2;
    o = 100;
}

foo(obj);
console.log(obj);
