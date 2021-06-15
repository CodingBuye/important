var smallerNumbersThanCurrent = function(nums) {
    let arr = nums.slice().sort((a, b) => a-b);
    let res = [];
    nums.forEach(num => {
        res.push(arr.indexOf(num));
    });
    return res;
}