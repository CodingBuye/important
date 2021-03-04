/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if(!envelopes) return 0;
    let len =envelopes.length;
    if(len <= 1) return len;
    envelopes.sort((a, b) => {
        if(a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    });
    let height = new Array(len).fill(0);
    for(let i=0;i<len;i++){
        height[i] = envelopes[i][1];
    }
    return lengthOfLIS(height);
};

function lengthOfLIS(arr) {
    let len = arr.length;
    let top = new Array(len);
    let piles = 0;
    for(let i=0;i<len;i++) {
        let poker = arr[i];
        let left = 0, right = piles;
        while(left < right) {
            let mid = parseInt((left+right)/2);
            if(top[mid] > poker) {
                right = mid;
            } else if(top[mid] < poker) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if(left === piles) piles+=1;
        top[left] = poker;
    }
    return piles;
}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));