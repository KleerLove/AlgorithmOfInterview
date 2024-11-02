// 动态规划
// dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));
var integerBreak = function (n) {
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= i - 1; j++) {
            max = Math.max(max, j * dp[i - j], j * (i - j))
        }
        dp[i] = max;
    }
    return dp[n];
};

// 贪心
// 每次拆成n个3，如果剩下是4，则保留4，然后相乘
var integerBreak = function (n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    if (n === 4) return 4;
    let result = 1;
    while (n > 4) {
        result *= 3;
        n -= 3;
    }
    result *= n;
    return result;
};