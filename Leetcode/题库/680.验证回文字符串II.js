var validPalindrome = function(s) {
    if(s.trim() === "") return true;
    let flag = true;
    let res = isPalindrome(s);
    if(Array.isArray(res)) {
        let [p, q] = res;
        return isPalindrome(s.slice(p+1, q+1)) === true || isPalindrome(s.slice(p, q)) === true;
    } else {
        return true;
    }
};

function isPalindrome(s) {
    let p = 0, q = s.length-1;
    while(p < q) {
        if(s[p] === s[q]) {
            p++;
            q--;
        } else {
            return [p, q];
        }
    }
    return true;
}