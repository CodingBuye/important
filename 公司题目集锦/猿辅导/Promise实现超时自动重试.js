function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        })
    })
}

function retry(func, times, delay) {
    var err = null;
    return new Promise((resolve, reject) => {
        var attemp = function() {
            func().then(resolve).catch(err => {
                console.log(`Attemp #${times} failed`);
                if(times === 0) {
                    reject(err);
                } else {
                    times -= 1;
                    setTimeout(function(){
                        attemp();
                    }, delay);
                }
            })
        }

        attemp();
    })
}