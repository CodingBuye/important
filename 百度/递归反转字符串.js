/**
 * 反转字符串:用递归解
 */

var reverseString = function(str) {
    if(!str || str.length <= 1) return str;
    let start = 0;
    return reverseString(str.slice(start+1)) + str[start];
}

// 测试
console.log(reverseString("123456"));
console.log(reverseString("123"));
