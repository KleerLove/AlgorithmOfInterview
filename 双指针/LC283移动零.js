var moveZeroes = function(nums) {
    let i0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[i0]] = [nums[i0], nums[i]];
            i0++;
        }
    }
};