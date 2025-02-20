// 完全平方数就是物品（可以无限件使用），凑个正整数n就是背包，问凑满这个背包最少有多少物品？
// 思路同 LC322零钱兑换
// 从递归公式dp[j] = min(dp[j - i * i] + 1, dp[j]);
// 中可以看出每次dp[j]都要选最小的，所以非0下标的dp[j]一定要初始为最大值，这样dp[j]在递推的时候才不会被初始值覆盖。

function numSquares(n) {
    let dp = new Array(n + 1).fill(Infinity);
    // 达到数字 0 所需的完全平方数数量为 0
    dp[0] = 0;
    // 外层循环，遍历所有可能的完全平方数（物品）
    for (let i = 1; i * i <= n; i++) {
        // 内层循环，遍历从该完全平方数到 n 的所有数字（背包）
        for (let j = i * i; j <= n; j++) {
            // 更新 dp[j] 的值，取 dp[j - i * i] + 1 和 dp[j] 中的较小值
            dp[j] = Math.min(dp[j - i * i] + 1, dp[j]);
        }
    }
    // 返回达到数字 n 所需的最少完全平方数数量
    return dp[n];
}