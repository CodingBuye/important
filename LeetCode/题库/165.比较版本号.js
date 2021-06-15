var compareVersion = function(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  let i = j = 0;
  while(i < arr1.length || j < arr2.length) {
    let str1 = i < arr1.length ? arr1[i] : '0';
    let str2 = j < arr2.length ? arr2[i] : '0';
    let res = compareNum(str1, str2);
    if(res === 0) {
      i++;
      j++;
    } else {
      return res;
    }
  }
  return 0;
}

function compareNum(str1, str2) {
  str1 = removeFrontZero(str1);
  str2 = removeFrontZero(str2);
  if(str1.length > str2.length) {
    return 1;
  } else if(str1.length < str2.length) {
    return -1;
  } else {
    let size = str1.length;
    for(let i=0;i<size;i++){
      if(str1[i] > str2[i]) {
        return 1;
      } else if(str1[i] < str2[i]) {
        return -1;
      } else {
        continue;
      }
    } 
    return 0;
  }
}

function removeFrontZero(str) {
  let start = 0;
  while(str[start]==='0'){
    start++;
  }
  return str.slice(start);
}