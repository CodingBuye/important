/**
 * 小易准备去拜访他的朋友，他的家在0点，但是他的朋友的家在x点(x > 0)，均在一条坐标轴上。
 * 小易每一次可以向前走1，2，3，4或者5步。问小易最少走多少次可以到达他的朋友的家。
 */
var n = parseInt(readline());
var start = 5;
print(solve(n));

function solve(n) {
    if(n <= 5) return 1;
    let count = 0;
    while(n !== 0) {
        let num = Math.floor(n/start);
        n -= num * start;
        start -= 1;
        count += num;
    }
    return count;
}