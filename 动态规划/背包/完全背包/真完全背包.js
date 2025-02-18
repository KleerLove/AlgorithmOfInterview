// 递推公式： dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i]] + value[i]);
// 注意，完全背包二维dp数组 和 01背包二维dp数组 递推公式的区别，01背包中是 dp[i - 1][j - weight[i]] + value[i])
// 因为01背包每个物品只有一个，既然空出物品i，那背包中也不会再有物品i
// 而在完全背包中，物品是可以放无限个，所以 即使空出物品i空间重量，那背包中也可能还有物品i，所以此时我们依然考虑放 物品i - 1 和 物品i 的最大价值

function completeKnapsack(N, W, weight, value) {
    // 创建二维数组 dp 并初始化为 0
    const dp = new Array(N + 1).fill(0).map(() => new Array(W + 1).fill(0));

    // 动态规划过程
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= W; j++) {
            if (j < weight[i - 1]) {
                // 不选择第 i 种物品
                dp[i][j] = dp[i - 1][j];
            } else {
                // 选择第 i 种物品
                dp[i][j] = Math.max(dp[i][j], dp[i][j - weight[i - 1]] + value[i - 1]);
            }
        }
    }

    // 返回最大价值
    return dp[N][W];
}