var permute = function(nums) {
    if(nums.length === 0) return [];
    let res = [];          // 保存结果
    let len = nums.length; // 数字个数
    let used = new Array(len).fill(false); // 记录数字是否已经被选择了
    let selected = [];     // 被选择的
    dfs(nums, len, used, res, selected);
    return res;
}

function dfs(nums, len, used, res, selected) {
    if(selected.length === len) {  // 当选择的路径个数等于列表长度，说明已经选择完成
        res.push([...selected]);
        return;
    }

    for(let i=0;i<len;i++){
        if(used[i] === false) {
            selected.push(nums[i]);
            used[i] = true;
            dfs(nums, len, used, res, selected);
            used[i] = false;
            selected.pop();
        }
    }
}