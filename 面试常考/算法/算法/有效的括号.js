var isValie = function(s) {
	if(s.length === 0 || s.trim().length === 0) return true;
    const dict = { '(' : ')', '{' : '}', '[' : ']'};
    let keyList = Object.keys(dict);
    let stack = [];
    if(!(s[0] in dict)) return false;
    for(let i=0;i<s.length;i++) {
        if(s[i] in dict) {
            stack.push(s[i]);
        } else {
            if(s[i] === dict[stack[stack.length-1]]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}