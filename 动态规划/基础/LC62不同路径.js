var uniquePaths = function (m, n) {
    const dp = new Array(m).fill().map(() => new Array(n).fill(1));
    // dp[i][j] 表示到达（i，j） 点的路径数
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};