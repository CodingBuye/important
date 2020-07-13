var solve = function(root){
	if(!root) return 0;
	let res = 0;
	let arr = [];
	let path = [];
	dfs(root, path, arr);
	res = arr.reduce((a, b) => a+b, 0);
}

function dfs(root, path, arr){
	path.push(root.val);
	let isLeaf = root.left === null || root.right === null;
	if(isLeaf) {
		arr.push(Number(path.join("")));
	}

	if(root.left) {
		dfs(root.left, path, arr);
	}
	if(root.right) {
		dfs(root.right, path, arr);
	}

	path.pop();
}