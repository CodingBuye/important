var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for(let i=0;i<T.length;i++){
        while(stack.length > 0 && T[i]>T[stack[stack.length-1]]) {
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
}

// 测试
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));