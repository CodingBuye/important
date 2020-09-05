var getPermutation = function(n, k) {
    let used = new Set();
    
    const helper = (temp) => {
        if(temp.length === n) {
            k-=1;
            if(k === 0) {
                return temp.join("");
            }
            return;
        }
        for(let i=1;i<=n;i++){
            if(used.has(i)) continue;
            temp.push(i);
            used.add(i);
            const res = helper(temp);
            temp.pop();
            used.delete(i);
            if(res) return res;
        }
    }

    return helper([]);
}
