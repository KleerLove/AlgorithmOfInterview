// 类似 LC494目标和 都是求 给定背包容量，装满背包有多少种方法
const change = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }

    return dp[amount];
}