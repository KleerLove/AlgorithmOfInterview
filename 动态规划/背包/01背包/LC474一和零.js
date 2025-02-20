// 龙湖
// 本题中 strs 数组里的元素就是物品，每个物品都是一个！
// 而 m 和 n相当于是一个背包，两个维度的背包

const findMaxForm = (strs, m, n) => {
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let numOfZeros, numOfOnes;

    for (let str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;

        for (let c of str) {
            if (c === '0') {
                numOfZeros++;
            } else {
                numOfOnes++;
            }
        }

        for (let i = m; i >= numOfZeros; i--) {
            for (let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }

    return dp[m][n];
};