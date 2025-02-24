// dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]
// 如果s[i]与s[j]相同，那么dp[i][j] = dp[i + 1][j - 1] + 2;
// 如果s[i]与s[j]不相同，说明s[i]和s[j]的同时加入 并不能增加[i,j]区间回文子序列的长度，那么分别加入s[i]、s[j]看看哪一个可以组成最长的回文子序列
const longestPalindromeSubseq = (s) => {
    const strLen = s.length;
    let dp = Array.from(Array(strLen), () => Array(strLen).fill(0));
    
    for(let i = 0; i < strLen; i++) {
        dp[i][i] = 1;
    }

    for(let i = strLen - 1; i >= 0; i--) {
        for(let j = i + 1; j < strLen; j++) {
            if(s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }

    return dp[0][strLen - 1];
};