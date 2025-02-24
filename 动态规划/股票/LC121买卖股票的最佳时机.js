// 贪心
var maxProfit = function(prices) {
    let lowerPrice = prices[0];// 重点是维护这个最小值（贪心的思想） 
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        lowerPrice = Math.min(lowerPrice, prices[i]);// 贪心地选择左面的最小价格
        profit = Math.max(profit, prices[i] - lowerPrice);// 遍历一趟就可以获得最大利润
    }
    return profit;
};

// 动态规划
// dp[i][0] 表示第i天持有股票所得最多现金, 一开始现金是0，那么加入第i天买入股票现金就是 -prices[i]
// dp[i][1] 表示第i天不持有股票所得最多现金, “持有”不代表就是当天“买入”！也有可能是昨天就买入了，今天保持持有的状态
const maxProfit = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),// 持股
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),// 不持股
        ];
    }
    return dp[len - 1][1];
};