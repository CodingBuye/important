var isHappy = function(n) {
    let st = new Set();
    while(n !== 1) {
        n = check(n);
        if(st.has(n)) {
            return false;
        } else {
            st.add(n);
        }
    }
    return true;
};

function check(n) {
    let sum = 0;
    while(n > 0) {
        sum += Math.pow(n % 10, 2);
        n = parseInt(n/10);
    }
    return sum;
}
