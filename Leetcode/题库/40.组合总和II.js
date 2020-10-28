var combinationSum2 = function(candidates, target) {
    if(!candidates || candidates.length === 0) return[];
    let len = candidates.length;
    let res = [];
    let path = [];
    candidates.sort((a, b) => a-b);
    dfs(candidates, 0, len, target, res, path);
    return res;
};

function dfs(candidates, begin, len, target, res, path){
    if(target === 0) {
        res.push([...path]);
        return;
    }

    for(let i=begin;i<len;i++){
        if(target-candidates[i] < 0) break;
        if(i>begin && candidates[i] === candidates[i-1]) continue;
        path.push(candidates[i]);
        dfs(candidates, i+1, len, target-candidates[i], res, path);
        path.pop();
    }
}