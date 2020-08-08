/**
 * 输入数字
 * 返回一个字符串，千分位
 * 123456 => 123,456
 */

var solution = function(num) {
    // 123456 => "654321"
    let str = num.toString().split("").reverse().join("");
    let res ="";
    for(let i=0,len=str.length;i<len;i++){
        if((i+1) % 3 === 0 && i!==len-1) {
            res += (str[i]+",");
        } else {
            res += str[i];
        }
    }

    res = res.split("").reverse().join("");
    return res;
}

var test = function(num) {
    return num.toFixed(2).toLocaleString();
}

// 测试
console.log(solution(123456));
console.log(solution(12));
console.log(solution(1234));

console.log(test(12345678.996));