var restoreIPAddresses = function(s) {
	let res = [];
	let len = s.length;
	if(len < 4 || len > 12) return res;
	let path = [];
	dfs(s, len, 0, 4, path, res);
	return res;
}

function dfs(s, len, begin, residue, path, res) {
	if(begin === len) {
		if(residue === 0) {
			res.push(path.join("."));
		}
		return;
	}
	for(let i=begin;i<begin+3;i++){
		if(i >= len) break;
		if(residue * 3 < len - i) continue;
		if(check(s, begin, i)) {
			path.push(s.slice(begin, i+1));
			dfs(s,len,i+1, residue-1, path, res);
			path.pop();
		}
	}
}

function check(s, left, right) {
	let len = right - left + 1;
	if(len > 1 && s[left] === '0') {
		return false;
	}
	let res = Number(s.slice(left, right+1));
	return res >=0 && res <= 255;
}

console.log(restoreIPAddresses("25525511135"));
