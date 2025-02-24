// 利用 left 标记连续递增子序列的起始位置，当递增结束或者遍历到末尾时, 更新 result 记录最长连续递增子序列的长度
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    if(len <= 1) return len;
    let left = 0;
    let result = 0;
    for(let i = 1; i < len; i++){
        if(nums[i] <= nums[i - 1]){
            result = Math.max(result, i - left);
            left = i;
        }
        if(i === len - 1) result = Math.max(result, i - left + 1);
    }
    return result;
};

// 动态规划
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    if(len <= 1) return len;
    const dp = new Array(len).fill(1);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1;
    }
    return Math.max(...dp);
}