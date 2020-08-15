var combine = function(n, k) {
    if(k > n || k <= 0 || n <= 0) return [];
    let ans = [];
    let path = [];
    dfs(n, k, ans, path, 1);
    return ans;
}

function dfs(n, k, ans, path, begin) {
    if(path.length === k) {
        ans.push([...path]);
        return;
    }
    for(let i=begin;i<=n;i++){
        path.push(i);
        dfs(n, k, ans, path, i+1);
        path.pop();
    }
}