// 直线不能相交，这就是说明在字符串nums1中 找到一个与字符串nums2相同的子序列
// 且这个子序列不能改变相对顺序, 只要相对顺序不改变，连接相同数字的直线就不会相交。
// 本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
// 那么本题就和 1143.最长公共子序列 就是一样一样的了。

const maxUncrossedLines = (nums1, nums2) => {
    // 两个数组长度
    const [len1, len2] = [nums1.length, nums2.length];
    // 创建dp数组并都初始化为0
    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 根据两种情况更新dp[i][j]
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // 返回dp数组中右下角的元素
    return dp[len1][len2];
};