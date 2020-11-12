/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    if(!A || A.length < 2) return A;
    let len = A.length;
    let i = 0, j = len - 1;
    while(i < len && j < len) {
        while(i < len && i % 2 === A[i] % 2) {
            i+=2;
        }
        while(j < len && j % 2 === A[j] % 2) {
            j-=2;
        }
        if(i < len && j < len){
            [A[i], A[j]] = [A[j], A[i]];
            i+=2;
            j-=2;
        }
    }
    return A;
};

console.log(sortArrayByParityII([4,2,5,7]));
