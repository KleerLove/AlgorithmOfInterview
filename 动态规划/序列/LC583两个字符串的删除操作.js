// 本质是找最长公共子序列, 和 LC1143最长公共子序列 思路一样
var minDistance = function (word1, word2) {
    const public = longestCommonSubsequence(word1, word2);
    return word1.length - public + word2.length - public;
};

var longestCommonSubsequence = function (text1, text2) {
    let len1 = text1.length, len2 = text2.length;
    let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2];
};

// 也可以用换一种思路的动态规划
// dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数
// 当word1[i - 1] 与 word2[j - 1]相同的时候，dp[i][j] = dp[i - 1][j - 1];
// 当word1[i - 1] 与 word2[j - 1]不相同的时候，有三种情况：
// 情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
// 情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
// 情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
// 那最后当然是取最小值，所以当word1[i - 1] 与 word2[j - 1]不相同的时候，递推公式：dp[i][j] = min({dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1});
// 因为 dp[i][j - 1] + 1 = dp[i - 1][j - 1] + 2，所以递推公式可简化为：dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
// 这里可能不少录友有点迷糊，从字面上理解 就是 当 同时删word1[i - 1]和word2[j - 1]，dp[i][j-1] 本来就不考虑 word2[j - 1]了，那么我在删 word1[i - 1]，是不是就达到两个元素都删除的效果，即 dp[i][j-1] + 1。
var minDistance = (word1, word2) => {
    let dp = Array.from(new Array(word1.length + 1), () =>
        Array(word2.length + 1).fill(0)
    );
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
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 2
                );
            }
        }
    }
    return dp[word1.length][word2.length];
};