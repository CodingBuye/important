var scoreOfParentheses = function(S) {
	let stack = [];
	for(let i=0;i<S.length;i++){
		if(S[i] === "(") {
			stack.push('(');
		} else {
			if(stack[stack.length-1] === '(') {
				stack.pop();
				stack.push(1);
			} else {
				let a = stack.pop();
				let temp = 0;
				while(a !== "(") {
					temp += a;
					a = stack.pop();
				}
				
				stack.push(2*temp);
			}
		}
	}
	return stack;
}

console.log(scoreOfParentheses("()"))
console.log(scoreOfParentheses("(())"))
console.log(scoreOfParentheses("()()"))
console.log(scoreOfParentheses("(()(()))"))