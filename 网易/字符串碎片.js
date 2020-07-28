/**
 * 
 */
function helper(str, len) {
    if(len === 0) return 0;
    let res = 0, num = 0;
    let i = 0, j = 1;
    while(j < len) {
        if(str[j] === str[i]) {
            j+=1;
        } else {
            res += (j-i);
            num += 1;
            i = j;
            j = i+1;
        }
    }
    res += (j-i);
    num += 1;
    return res/num;
}

console.log(helper("aaabbaaac", 9))