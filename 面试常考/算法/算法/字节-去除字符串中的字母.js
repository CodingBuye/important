// 对于输入的字符串，取出其中的字符b，去除相邻的a和c

var solution = function(s) {
  if(!s) return "";
  let stack = [];
  for(let i=0, len = s.length;i<len;i++){
    if(s[i] === 'b') {
      continue;
    } else if(s[i] === 'c') {
      if(stack.length === 0){
        stack.push(s[i]);
      } else {
        if(stack[stack.length-1] === 'a') {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
      }
    } else if(s[i] === 'a') {
      if(stack.length === 0){
        stack.push(s[i]);
      } else {
        if(stack[stack.length-1] === 'c') {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

console.log(solution("cacabbcccccd"));