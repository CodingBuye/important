var copyRandomList = function(head) {
    let visited = new Map();

    function dfs(node) {
        if(!node) return null;
        if(visited.has(node)) {
            return visited.get(node);
        }
        let copy = new Node(node.val, null, null);
        copy.next = dfs(node.next);
        copy.random = dfs(node.random);
        return copy;
    }

    return dfs(head);
}