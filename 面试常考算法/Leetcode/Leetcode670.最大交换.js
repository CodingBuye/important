var maximunSwap = function(num) {
  let numToArr = num.toString().split("");
  let maxVal = maxIndex = -1;
  let arr = new Array(numToArr);
  arr[arr.length-1] = arr.length-1;
  for(let i=numToArr.length-1;i>=0;--i){
    if(parseInt(numToArr[i]) > maxVal) {
      maxVal = parseInt(numToArr[i]);
      maxIndex = i;
    }
    arr[i] = maxIndex;
  }

  for(let i=0;i<numToArr.length;i++){
    if(arr[i] !== i && numToArr[arr[i]] !== numToArr[i]) {
      let temp = numToArr[i];
      numToArr[i] = numToArr[arr[i]];
      numToArr[arr[i]] = temp;
      break;
    }
  }
  return parseInt(numToArr.join(""));
}

// 测试
console.log(maximunSwap(1993));

