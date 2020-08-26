var removeOuterParentheses = function(S) {
    let stack = [];
    let res = "";
    let start = 0, end = 0, flag = false;
    for(let i=0;i<S.length;i++){
        if(S[i] === "(") {
            stack.push(S[i]);
            if(!flag) {
                start = i;
                flag = true;
            }
        }
        if(S[i] === ")") {
            stack.pop();
            if(stack.length === 0) {
                end = i;
                res += S.substring(start+1, end);
                flag = false;
                start = end;
            }
        }
    }
    return res;
}

// 测试
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));