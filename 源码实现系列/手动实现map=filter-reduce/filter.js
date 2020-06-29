function filter(arr, callback) {
	if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
		return [];
	}
	let result = [];
	for(let i=0, len=arr.length;i<len;i++){
		if(callback(arr[i], i, arr)) {
			result.push(arr[i]);
		}
	}
	return result;
}