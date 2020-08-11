/**
 * 参考：https://www.cnblogs.com/chengxiao/p/6104371.html
 */

const shellSort = function(arr) {
    // 增量gap，并逐步缩小增量
    if(arr.length <= 1) return arr;
    let len = arr.length;
    for(let gap = parseInt(len/2);gap>0;gap=parseInt(gap/2)){
        // 从第gap个元素，逐个对其所在组进行直接插入排序操作
        for(let i=gap;i<len;i++){
            let j = i;
            while(j-gap >= 0 && arr[j] < arr[j-gap]) {
                [arr[j], arr[j-gap]] = [arr[j-gap], arr[j]];
                j-=gap;
            }
        }
    }
    return arr;
}

console.log(shellSort([1,4,2,7,9,8,3,6]));