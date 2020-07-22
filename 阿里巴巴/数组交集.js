/**
 * 寻找2个数组的交集
 */


function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.indexOf(item) > -1);
}

console.log(intersection([1,2,3,4,5], [2,4,6,8,10]));