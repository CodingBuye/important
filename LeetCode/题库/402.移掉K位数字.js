/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length <= k) return "0";
    let start = 0, remain = num.length-k;
    let stack = [parseInt(num[0])];
    for(let i=1,len=num.length;i<len;i++){
        let digit = parseInt(num[i]);
        while (k && stack[stack.length-1] > digit) {
            stack.pop();
            k -= 1;
        }
        stack.push(digit);
    }
    stack = stack.slice(start, start+remain);
    while (start < stack.length) {
        if(stack[start] !== 0) {
            break;
        }
        start+=1;
    }
    return stack.slice(start).join("") || "0";
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));