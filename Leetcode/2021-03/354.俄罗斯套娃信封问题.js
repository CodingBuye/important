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
    return envelopes;
};

function lengthOfLIS(arr) {
    
}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));