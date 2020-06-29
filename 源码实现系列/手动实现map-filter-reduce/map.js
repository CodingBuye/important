function map(arr, callback) {
	if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
		return [];
	}
	let result = [];
	for(let i=0, len=arr.length;i<len;i++){
		result.push(callback(arr[i], i, arr));
	}
	return result;
}