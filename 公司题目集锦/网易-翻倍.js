/**
 * 小易给定你数字A, B(A<B)和系数p, q。
 * 每次操作你可以将A变成A+P或者将p变成p*q。问至少几次操作使得B <= A。
 */
var T = parseInt(readline());
while(T--){
    let arr = readline().split(" ");
    let A = parseInt(arr[0]);
    let B = parseInt(arr[1]);
    let p = parseInt(arr[2]);
    let q = parseInt(arr[3]);
    print(solve(A, B, p, q, 0));
}

function solve(A, B, p, q, num) {
    if(B-A <= p) {
        return num+1;
    } else if(parseInt((B-A)/p) <= q) {
        return num+2;
    } else {
        return solve(A, B, p*q*q, q, num+2);
    }
}

console.log(solve(1,5,7,2,0));
console.log(solve(3,5,1,2,0));