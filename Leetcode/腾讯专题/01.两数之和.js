var twoSum = function(nums, target) {
    let map = new Map();
    let len = nums.length;
    for(let i=0;i<len;i++){
        if(map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            map.set(target-nums[i], i);
        }
    }
    return [-1, -1];
}