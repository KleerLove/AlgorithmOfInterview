// 第一次持有股票 第一次不持有股票 第二次持有股票 第二次不持有股票
// dp[i][j]中 i表示第i天，j为 [0 - 4] 五个状态，dp[i][j]表示第i天状态j所剩最大现金。
// 需要注意：dp[i][1]，表示的是第i天，买入股票的状态，并不是说一定要第i天买入股票

const maxProfit = prices => {
    const len = prices.length;
    const dp = new Array(len).fill(0).map(() => new Array(5).fill(0));
    dp[0][1] = -prices[0];
    dp[0][3] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    return dp[len - 1][4];
};