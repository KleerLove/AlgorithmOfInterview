var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // 处理不偷最后一个房子 和 不偷第一个房子 两种情况
    return Math.max(
        robLinear(nums.slice(0, -1)),  // 排除最后一个元素
        robLinear(nums.slice(1))       // 排除第一个元素
    );
};

const robLinear = nums => {
    const len = nums.length;
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};