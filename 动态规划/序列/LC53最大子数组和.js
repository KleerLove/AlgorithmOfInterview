// 动态规划
var maxSubArray = function(nums) {
    const dp = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
};

// 动态规划空间优化
var maxSubArray = function(nums) {
    let pre = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        pre = pre > 0 ? pre + nums[i] : nums[i];
        max = Math.max(max, pre)
    }
    return max;
};

// 贪心
var maxSubArray = function(nums) {
    let result = -Infinity
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > result) {
            result = count
        }
        if(count < 0) {
            count = 0
        }
    }
    return result
};