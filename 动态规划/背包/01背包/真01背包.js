// *
// 如果 dp 数组的长度为 w，那么它的索引范围是从 0 到 w - 1，这样就无法直接表示背包容量为 w 时的情况。
// 而将数组长度设为 w + 1 后，其索引范围是从 0 到 w，正好可以完整地覆盖从容量 0 到最大容量 w 的所有情况，每个索引 j 就对应着背包容量为 j 时的最大价值。

function knapsack(weight, value, w) {
    const n = weight.length;
    // 初始化 dp 数组，长度为背包最大容量加 1，初始值都为 0
    const dp = new Array(w + 1).fill(0);// *

    // 遍历每个物品
    for (let i = 0; i < n; i++) {
        // 倒序遍历背包容量，从最大容量 w 到当前物品的重量
        for (let j = w; j >= weight[i]; j--) {
            // 状态转移方程，更新 dp[j] 的值
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }

    // 返回背包容量为 w 时的最大价值
    return dp[w];
}