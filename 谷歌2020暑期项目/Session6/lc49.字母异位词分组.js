var groupAnagrams = function(strs) {
    if(!strs || strs.length === 0) return [];
    let res = [];
    let map = new Map();
    for(let i=0,len=strs.length;i<len;i++){
        let temp = strs[i].split("").sort().join("");
        if(map.has(temp)) {
            map.get(temp).push(strs[i]);
        } else {
            map.set(temp, [strs[i]]);
        }
    }
    for(let value of map.values()) {
        res.push(value);
    }
    return res;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));