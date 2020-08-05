/**
 * 冒泡排序
 */
var bubbleSort = function(arr) {
    if(!arr || arr.length <= 1) return arr;
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 4, 2, 8, 9, 5, 1]))