var permuteUnique = function(nums) {
    if(nums.length === 0) return [];
    nums.sort((a, b) => a-b);
    let len = nums.length;
    let res = [];
    let used = new Array(len).fill(false);
    let selected = [];
    dfs(nums, len, used, selected, res);
    return res;
}

function dfs(nums, len, used, selected, res) {
    if(selected.length === len) {
        res.push([...selected]);
        return;
    }
    for(let i=0;i<len;i++){
        if(used[i]) continue;
        if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
        if(used[i] === false) {
            used[i] = true;
            selected.push(nums[i]);
            dfs(nums, len, used, selected, res);
            used[i] = false;
            selected.pop();
        }
    }
}