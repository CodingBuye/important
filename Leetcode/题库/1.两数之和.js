var twoSum = function(nums, target) {
    if(!nums || nums.length < 2) return [-1, -1];
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])) {
            return [i, map.get(nums[i])];
        } else {
            map.set(target-nums[i], i);
        }
    }
    return [-1, -1];
}