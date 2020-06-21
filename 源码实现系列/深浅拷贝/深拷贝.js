const deepClone = function(obj) {
	let objClone = Array.isArray(obj) ? [] : {};
	if(obj && typeof objClone === 'object') {
		for(let key of obj) {
			if(obj.hasOwnProperty(key)) {
				if(obj[key] && typeof obj[key] === 'object') {
					if(obj[key] instanceof Date) {
						objClone[key] = new Date(obj[key].valueOf());
					} else {
						objClone[key] = deepClone(obj[key]);
					}
				}
			} else {
				objClone[key] = obj[key];
			}
		}
	}
	return objClone;
}