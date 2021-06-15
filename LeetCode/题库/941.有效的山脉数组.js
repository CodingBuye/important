/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(!A || A.length <= 2) return false;
    let len = A.length;
    let i = 1;
    while(i < len){
        if(A[i] < A[i-1]) {
            break;
        }
        i++;
    }
    if(i === 1 || i === len) return false;
    while(i < len) {
        if(A[i] >= A[i-1]) {
            return false;
        }
        i++;
    }
    return true;
};