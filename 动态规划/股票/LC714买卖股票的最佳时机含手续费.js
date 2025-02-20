// 相对于动态规划：122.买卖股票的最佳时机II，本题只需要在计算卖出操作的时候减去手续费就可以了，代码几乎是一样的。
var maxProfit = function (prices, fee) {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]), // 不持股
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0] - fee), // 持股
        ];
    }
    return dp[len - 1][1];
};

// 贪心
// 本题相比于II用贪心要复杂得多, 这是动态规划的优势
var maxProfit = function(prices, fee) {
    // 初始化买入价格为第一天的股票价格
    let buy = prices[0] + fee;
    // 初始化总利润为 0
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] + fee < buy) {
            // 如果当前价格加上手续费小于买入价格，更新买入价格
            buy = prices[i] + fee;
        } else if (prices[i] > buy) {
            // 如果当前价格大于买入价格，进行交易并计算利润
            profit += prices[i] - buy;
            // 更新买入价格为当前价格，以便后续继续寻找更优的交易机会
            buy = prices[i];
        }
    }

    return profit;
};