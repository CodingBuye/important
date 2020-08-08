/**
 * 定义S(n):表示n在十进制下的各位数字之和
 * 现在给定一个x,请你求出最小正整数n，满足x<=S(n).
 */

var T = parseInt(readline());
while(T--){
    var x = parseInt(readline());
    print(solve(x));
}

function solve(x) {
    if(x <= 9) return x;
    let numOfNine = parseInt(x/9);
    let rest = x % 9;
    let res = "";
    for(let i=0;i<numOfNine;i++){
        res += "9";
    }
    if(rest !== 0) res = rest + res;
    return res;
}