var fib = function(n) {
  if(n === 0 || n === 1) return n;
  let num1 = 0;
  let num2 = 1;
  let res = num1+num2;
  for(let i=2;i<=n;i++){
    res = num1 + num2;
    num1 = num2;
    num2 = res;
  }
  return res;
}

console.log(fib(0), fib(1), fib(2), fib(3));