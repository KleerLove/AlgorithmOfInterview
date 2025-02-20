// 相对于动态规划：122.买卖股票的最佳时机II ，本题加上了一个冷冻期

function maxProfit(prices) {
    // 第i天状态 持股 卖出 非冷冻期(不持股) 处于冷冻期
    const dp = new Array(prices.length).fill(0).map(() => [0, 0, 0, 0]);
    dp[0][0] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        // 持股
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        // 卖出
        dp[i][1] = dp[i - 1][0] + prices[i];
        // 非冷冻期（不持股）
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1]);
        // 冷冻期（上一天卖出）
        dp[i][3] = dp[i - 1][1];
    }
    return Math.max(...dp.pop());
};