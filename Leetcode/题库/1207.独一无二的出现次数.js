var uniqueOccurrences = function(arr) {
    if(!arr || arr.length < 2) return true;
    let map = new Map();
    let st = new Set();
    for(let num of arr){
        if(map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }
    
    for(let value of map.values()){
        if(st.has(value)) {
            return false;
        } else {
            st.add(value);
        }
    }

    return true;
};