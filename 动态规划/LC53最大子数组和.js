// 类似题目lc152

var maxSubArray = function(nums) {
    const dp = [];
    dp[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
    }
    return Math.max(...dp);
};

//降维
var maxSubArray = function(nums) {
    let pre = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        pre = pre > 0 ? pre + nums[i] : nums[i];
        max = Math.max(max, pre)
    }
    return max;
};