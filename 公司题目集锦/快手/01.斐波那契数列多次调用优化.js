/**
 * https://juejin.im/post/6844904003243868173
 */

// 1. 常规解法
function Fibonacci(n) {
    return n < 2 ? n : Fibonacci(n-1) + Fibonacci(n-2);
}

// 测试
console.time();
Fibonacci(40);
console.timeEnd(); // 1565.351ms

// 2. 通过缓存数组来减少重复计算
function FibonacciWithMemory(n, memory) {
    if(!memory) memory = [];
    if(n < 2) return n;
    if(!memory[n]) {
        memory[n] = FibonacciWithMemory(n-1, memory) + FibonacciWithMemory(n-2, memory);
    }
    return memory[n];
}

// 测试
console.time();
FibonacciWithMemory(40);
console.timeEnd(); // 0.081ms

// 3. 使用动态规划
function FibonacciIterative(n) {
    if(n<2) return n;
    let i = 2;
    let pre = 1, cur = 1;
    let result = 0;
    while(i++ < n) {
        res = pre + cur;
        pre = cur;
        cur = res;
    }
    return res;
}
console.time()
FibonacciIterative(40)
console.timeEnd() // 0.074ms