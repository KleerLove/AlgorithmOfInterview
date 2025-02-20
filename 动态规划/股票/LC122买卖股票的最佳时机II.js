// 贪心
// 明天有得赚就买, 第二天立马卖
var maxProfit = function(prices) {
    let result = 0;
    for(let i = 1; i < prices.length; i++){
        const profit = prices[i] - prices[i - 1];
        if(profit > 0) result += profit;
    }
    return result;
};

// 动态规划
// 在动规五部曲中，这个区别主要是体现在递推公式上，其他都和121. 买卖股票的最佳时机 一样的
// 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
// 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
// 这里和121. 买卖股票的最佳时机 唯一不同的地方，就是推导dp[i][0]的时候，第i天买入股票的情况
// 在121. 买卖股票的最佳时机 中，因为股票全程只能买卖一次，所以如果买入股票，那么第i天持有股票即dp[i][0]一定就是 -prices[i]。
// 而本题，因为一只股票可以买卖多次，所以当第i天买入股票的时候，所持有的现金可能有之前买卖过的利润。
// 那么第i天持有股票即dp[i][0]，如果是第i天买入股票，所得现金就是昨天不持有股票的所得现金 减去 今天的股票价格 即：dp[i - 1][1] - prices[i]。
// 本题和121. 买卖股票的最佳时机 的代码几乎一样，唯一的区别在：
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
const maxProfit = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]), // 不持股
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]), // 持股
        ];
    }
    return dp[len - 1][1];
};