/**
 * 题目描述：
 * 第一行是骨牌个数
 * 从第二行开始每行代表一个骨牌的高和宽
 * 
 * 骨牌的排列要求后一张的宽和高必须大于前一张的宽和高，求最长的骨牌排列
 * 
 * 解法：先将数组按照高度进行排序，然后对宽度求最长上升子序列
 */
const N = praseInt(readline());
const arr = [];
while(N--){
    let [n, m] = readline().split(" ").map(item => Number(item));
    arr.push([n,m]);
}
print(solve(arr));


function solve(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let maxCount = 0;
    let count = 1;
    let i = 0, j = 1;
    while(j < arr.length) {
        while(j<arr.length && arr[j][1] > arr[j-1][1]) {
            count += 1;
            j++;
        }
        if(j === arr.length) {
            break;
        } else {
            maxCount = Math.max(maxCount, count);
            i = j;
            j = i+1;
            count = 1;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
}

console.log(solve([[5,5], [3, 1], [2, 6], [4, 2], [1, 4]]));