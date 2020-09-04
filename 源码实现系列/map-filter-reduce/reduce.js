function reduce(arr, callback, initialVal){
	if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
		return [];
	}
	let hasInitialVal = initialVal !== undefined;
	let value = hasInitialVal ? initialVal : arr[0];
	for(let i= hasInitialVal ? 0:1, len=arr.length;i<len;i++){
		value = callback(value, arr[i], i, arr);
	}
	return value;
}