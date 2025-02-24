// dp[i][j]：以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]
// 当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成。
// 一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。即不需要考虑当前s子串和t子串的最后一位字母，所以只需要 dp[i-1][j-1]。
// 一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]。
// 所以当s[i - 1] 与 t[j - 1]相等时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
// 当s[i - 1] 与 t[j - 1]不相等时，dp[i][j]只有一部分组成，不用s[i - 1]来匹配（就是模拟在s中删除这个元素）
// 所以递推公式为：dp[i][j] = dp[i - 1][j];
const numDistinct = (s, t) => {
    let dp = Array.from(Array(s.length + 1), () => Array(t.length + 1).fill(0));

    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[s.length][t.length];
};