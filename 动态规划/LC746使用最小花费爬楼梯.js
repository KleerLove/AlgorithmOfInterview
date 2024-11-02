// (自底向上)
var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    const dp = [0, 0];
    for(let i = 2; i <= len; i++){
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[len];
};

// 逆向思维(自顶向下)
var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    const dp = [];
    dp[len - 1] = cost[len - 1];
    dp[len - 2] = cost[len - 2];
    for(let i = len - 3; i >= 0; i--){
        dp[i] = Math.min(dp[i + 1], dp[i + 2]) + cost[i];
    }
    return Math.min(dp[0], dp[1]);
};