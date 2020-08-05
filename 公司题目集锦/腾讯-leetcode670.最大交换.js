/**
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 * 
 * 输入: 2736
 * 输出: 7236
 * 解释: 交换数字2和数字7
 * 
 * 输入: 9973
 * 输出: 9973
 * 解释: 不需要交换
 */
var maximumSwap = function(num) {
    let numToArr = num.toString().split(""); // 将数字转化为字符数组
    let len = numToArr.length;
    let maxVal = maxIndex = -1;
    let temp = new Array(len);
    for(let i = len-1;i>=0;--i) {
        if(parseInt(numToArr[i]) > maxVal) {
            maxVal = parseInt(numToArr[i]);
            maxIndex = i;
        }
        temp[i] = maxIndex;
    }

    for(let i=0;i<len;i++){
        if(temp[i] !== i && numToArr[temp[i]] !== numToArr[i]) {
            let t = numToArr[i];
            numToArr[i] = numToArr[numToArr[i]];
            numToArr[temp[i]] = t;
            break;
        }
    }
    return parseInt(numToArr.join(""));
}