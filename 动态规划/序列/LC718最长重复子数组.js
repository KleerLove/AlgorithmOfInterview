// dp[i][j] ：以下标i - 1为结尾的nums1，和以下标j - 1为结尾的nums2，最长重复子数组长度为dp[i][j]
const findLength = (nums1, nums2) => {
    // nums1、nums2数组的长度
    const [len1, len2] = [nums1.length, nums2.length];
    // dp数组初始化，都初始化为0
    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    // 初始化最大长度为0
    let res = 0;
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 遇到nums1[i - 1] === nums2[j - 1]，则更新dp数组
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // 更新res
            res = dp[i][j] > res ? dp[i][j] : res;
        }
    }
    // 遍历完成，返回res
    return res;
};