var mySqrt = function (x) {
  if(x === 0 || x === 1) return x;
  let left = 0;
  let right = Math.ceil(x/2);
  while(left < right) {
    let mid = Math.ceil((left+right)/2);
    if(mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};