var combinationSum = function(candidates, target) {
    if(!candidates || candidates.length === 0) return [];
    let len = candidates.length;
    let res = [];
    let path = [];
    candidates.sort((a, b) => a-b);
    dfs(candidates, 0, len, target, path, res);
    return res;
};


function dfs(candidates, begin, len, target, path, res){
    if(target === 0) {
        res.push([...path]);
        return;
    }

    for(let i=begin;i<len;i++){
        if(target-candidates[i] < 0) break;
        path.push(candidates[i]);
        dfs(candidates, i, len, target-candidates[i], path, res);
        path.pop();
    }
}
