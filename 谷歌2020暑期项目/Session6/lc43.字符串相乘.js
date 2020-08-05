/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 说明：
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/multiply-strings
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    let len1 = num1.length, len2 = num2.length;
    let res = new Array(len1+len2).fill(0);
    for(let i=len1-1;i>=0;i--) {
        let n1 = num1[i].charCodeAt() - '0'.charCodeAt();
        console.log(n1);
        for(let j = len2-1; j >= 0;j--) {
            let n2 = num2[j].charCodeAt() - '0'.charCodeAt();
            console.log(n2);
            let sum = (res[i+j+1] + n1*n2);
            res[i+j+1] = sum % 10;
            res[i+j] += parseInt(sum/10);
        }
    }
    let ans = res.map(item => item.toString()).join("");
    return ans[0] === '0' ? ans.slice(1) : ans;
}

// 测试
console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
console.log(multiply("99", "9"));