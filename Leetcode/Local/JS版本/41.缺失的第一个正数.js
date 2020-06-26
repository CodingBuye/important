var firstMissingPositive = function(nums) {
	var len = nums.length;
	for(let i=0;i<len;i++){
		while(nums[i] >= 1 && nums[i] <= len && nums[nums[i]-1] !== nums[i]) {
			let temp = nums[i];
			nums[i] = nums[temp-1];
			nums[temp-1] = temp;
		}
	}

	for(let i=0;i<len;i++){
		if(nums[i] !== i+1){
			return i+1;
		}
	}

	return len+1;
}