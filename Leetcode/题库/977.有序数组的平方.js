var sortedSquares = function(A) {
    if(!A || A.length === 0) return [];
    let len = A.length;
    let left = 0, right = len-1, index = len-1;
    let res = new Array(len).fill(-1);
    while(left <= right) {
        let l = A[left] * A[left];
        let r = A[right] * A[right];
        if(l < r) {
            res[index] = r;
            right-=1;
        } else {
            res[index] = l;
            left+=1;
        }
        index-=1;
    }
    return res;
}

console.log(sortedSquares([-4,-1,0,3,10]));