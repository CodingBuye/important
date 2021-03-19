/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    let top = "";
    if(!S || S.length <= 1) return S;
    for(let i=0,len=S.length;i<len;i++) {
        if(stack.length === 0) {
            stack.push(S[i]);
        } else {
            top = stack[stack.length-1];
            if(top !== S[i]) {
                stack.push(S[i]);
            } else {
                while(top === S[i] && stack.length) {
                    stack.pop();
                    top = stack[stack.length-1];
                }
            }
        }
    }
    return stack.join("");
};