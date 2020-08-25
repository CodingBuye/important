var myInterval = function(func, wait) {

    var myTimeout = (func, wait) => {
        setTimeout(() => {
            func();
            myTimeout(func, wait);
        }, wait);
    }

    myTimeout(func, wait);
}

myInterval(()=> {
    console.log("hello wwy")
}, 3000)