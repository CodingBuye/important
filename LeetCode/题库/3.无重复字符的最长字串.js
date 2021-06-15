var lengthOfLongestSubstring = function(s) {
    if(!s || s.length === 0) return 0;
    let positions = new Map();
    let curLen = 0;
    let maxLen = 0;
    for(let i=0,len=s.length;i<len;i++){
        let index = positions.get(s[i]);
        if(index === undefined || i-index > curLen) {
            curLen += 1;
        } else {
            maxLen = Math.max(maxLen, curLen);
            curLen = i - index;
        }
        positions.set(s[i], i);
    }
    maxLen = Math.max(maxLen, curLen);
    return maxLen;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));