// 爆破组

// dp二维数组
var maxProduct = function(nums){
    const len = nums.length;
    const dp = Array(len).fill().map(() => Array(2));
    dp[0] = [nums[0], nums[0]];
    for(let i = 1; i < len; i++){
        const n = nums[i];
        dp[i][0] = Math.min(dp[i - 1][0] * n, dp[i - 1][1] * n, n);
        dp[i][1] = Math.max(dp[i - 1][0] * n, dp[i - 1][1] * n, n);
    }
    return Math.max(...dp.flat());
};

// 降维
var maxProduct = function(nums){
    const len = nums.length;
    let minPre = nums[0];
    let maxPre = nums[0];
    let result = nums[0];
    for(let i = 1; i < len; i++){
        const n = nums[i];
        const tempMinPre = minPre; // 暂存, 避免minPre改变影响maxPre计算
        minPre = Math.min(minPre * n, maxPre * n, n);
        maxPre = Math.max(tempMinPre * n, maxPre * n, n);
        result = Math.max(result, maxPre);
    }
    return result;
};