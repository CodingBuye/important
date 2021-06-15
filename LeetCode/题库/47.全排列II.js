/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length === 0) return [];
    nums.sort((a, b) => a-b);
    let len = nums.length;
    let used = new Array(len).fill(false);
    let res = [];
    let selected = [];
    dfs(nums, len, used, res, selected);
    return res;
};

function dfs(nums, len, used, res, selected) {
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
            dfs(nums, len, used, res, selected);
            used[i] = false;
            selected.pop();
        }
    }
}