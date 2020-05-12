var moveZeroToEnd  = function(s) {
  if(s.length <= 1) return s;
  let i = 0;
  let j = i+1;
  let arr = s.split("");
  while(j < arr.length) {
    if(arr[i] === '0'){
      if(arr[j] === '0') {
        j++;
      } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return arr.join("");
}

console.log(moveZeroToEnd("1203040506"));