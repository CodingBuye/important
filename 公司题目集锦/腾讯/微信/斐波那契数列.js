/**
 * 递归算法
 */
function Fibonacci1(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    return Fibonacci1(n-2) + Fibonacci1(n-1);
}

/**
 * 非递归算法
 */
function Fibonacci2(n){
    if(n <= 0) return 0;
    if(n === 1) return 1;
    let a = 0, b = 1;
    let res = 0;
    for(let i=2;i<=n;i++){
        res =  a + b;
        a = b;
        b = res;
    }
    return res;
}