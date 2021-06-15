/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    if (!tokens) return;
    if(tokens.length === 1) return Number(tokens.pop());
    if(tokens.length === 2) return;
    if(!isDigit(tokens[0]) || !isDigit(tokens[1])) return;
    let stack = [];
    let a, b;
    for(let i=0, len=tokens.length;i<len;i++){
        if(isDigit(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            if(stack.length < 2) return;
            b = stack.pop();
            a = stack.pop();
            stack.push(parseInt(operator(tokens[i], a, b)));
        }
    }
    return stack.length === 1 ? stack.pop() : -1;
};

function isDigit(token){
    return !isNaN(Number(token));
}

function operator(op, a, b) {
    switch (op) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return Number(a/b);
    }
}

// 测试
let tokens1 = ["2","1","+","3","*"];
let tokens2 = ["4","13","5","/","+"];
let tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens1));
console.log(evalRPN(tokens2));
console.log(evalRPN(tokens3));


