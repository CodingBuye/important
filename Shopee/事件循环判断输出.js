console.log('script start'); // 同步任务

async function async1() {
    await async2();  // 同步任务
    console.log('async1 end'); // 添加到微任务队列
}

async function async2() {
    console.log('async2 end');
}

async1();

setTimeout(function(){
    console.log('setTimeout'); // 添加到宏任务队列
}, 0);

new Promise(resolve => {
    console.log('promise');  // 同步任务
    resolve();
}).then(function(){
    console.log('promise1'); // 添加到微任务队列
}).then(function(){
    console.log('promise2'); // 添加到微任务队列
});

console.log('script end');   // 同步任务