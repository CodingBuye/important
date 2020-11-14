/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let len1 = arr1.length, len2 = arr2.length;
    let left = 0, right = len1-1;
    for(let i=0;i<len2;i++){
        while (left <= right) {
            if(arr1[left] === arr2[i]) {
                left+=1;
            } else if(arr1[right] === arr2[i]) {
                [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
                left+=1;
                right-=1;
            } else {
                right-=1;
            }
        }
        right = len1-1;
    }
    if(left >= len1 - 1) return arr1;
    return arr1.slice(0, left).concat(arr1.slice(left).sort((a, b)=>a-b));
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
console.log(relativeSortArray(arr1, arr2));
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));
