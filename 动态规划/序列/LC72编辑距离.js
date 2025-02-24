// dp[i][j] 表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]
// 递推公式分析见代码随想录
const minDistance = (word1, word2) => {
    let dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1).fill(0));

    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }

    return dp[word1.length][word2.length];
};