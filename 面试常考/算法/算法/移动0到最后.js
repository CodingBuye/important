// var moveZeroToEnd  = function(s) {
//   if(s.length <= 1) return s;
//   let i = 0;
//   let j = i+1;
//   let arr = s.split("");
//   while(j < arr.length) {
//     if(arr[i] === '0'){
//       if(arr[j] === '0') {
//         j++;
//       } else {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;j++;
//       }
//     } else {
//       i++;
//       j++;
//     }
//   }
//   return arr.join("");
// }

// console.log(moveZeroToEnd("1203040506"));

var moveZeroToEnd = function(arr) {
    if(!arr || arr.length <= 1) return arr;
    let left = 0, right = 1;
    let len = arr.length;
    while(right < len) {
        if(arr[left] === 0) {
            if(arr[right] === 0) {
                right++;
            } else {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right++;
            }
        } else {
            left++;
            right++;
        }
    }
    return arr;
}

console.log(moveZeroToEnd([1, 0, 0, 0, 0, 3, 3]))