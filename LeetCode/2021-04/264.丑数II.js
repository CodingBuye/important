/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n <= 0) return 0;
    let arr = [];
    arr.push(1);
    let nextIndex = 1;
    let p2 = 0, p3 = 0, p5 = 0;
    while(nextIndex < n) {
        let min = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
        arr.push(min);

        if(min === arr[p2] * 2) {
            p2 += 1;
        }
        if(min === arr[p3] * 3) {
            p3 += 1;
        }
        if(min === arr[p5] * 5) {
            p5 += 1;
        }
        nextIndex++;
    }
    return arr[nextIndex-1];
};

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));
