/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = "";
    let i = num1.length-1, j = num2.length-1, carry = 0;
    while(i >= 0 || j >= 0) {
        let a = i < 0 ? 0 : parseInt(num1[i]);
        let b = j < 0 ? 0 : parseInt(num2[j]);
        let sum = a + b + carry;
        res = (sum%10) + res;
        carry = parseInt(sum/10);
        i -= 1;
        j -= 1;
    }
    if(carry) {
        res = carry + res;
    }
    return res;
};