var lengthOfLongestSubstring = function(s) {
    let curLength = 0, maxLength = 0;
    let temp = [];
    for(let i=0, len=s.length;i<len;i++){
        let preIndex = temp.indexOf(s[i]);
        if(preIndex < 0 || i-preIndex > curLength) {
            curLength+=1;
        } else {
            maxLength = Math.max(curLength, maxLength);
            curLength = i-preIndex;
        }
        temp.push(s[i]);
    } 
    maxLength = Math.max(curLength, maxLength);
    return maxLength;
}