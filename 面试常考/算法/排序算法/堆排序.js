/**
 * 参考：https://www.cnblogs.com/chengxiao/p/6129630.html
 */

const heapSort = function(arr) {
    // 1. 构建大顶堆
    if(arr.length <= 1) return arr;
    let len = arr.length;
    for(let i=parseInt(arr.length/2-1);i>=0;i--){
        // 从第一个非叶子节点从下至上，从右至左调增结构
        adjustHeap(arr, i, len);
    }

    for(let j=len-1;j>0;j--){
        [arr[0], arr[j]] = [arr[j], arr[0]];
        adjustHeap(arr, 0, j);
    }

    return arr;
}

function adjustHeap(arr, i, len) {
    let temp = arr[i]; // 先取出当前元素i
    for(let k=2*i+1;k<len;k=2*i+1){
        if(k+1 < len && arr[k] < arr[k+1]) {
            k++;
        }
        if(arr[k] > temp) {
            arr[i] = arr[k];
            i = k;
        } else {
            break;
        }
    }
    arr[i] = temp;
}


// 测试
console.log(heapSort([9,8,7,6,5,4,3,2,1]));