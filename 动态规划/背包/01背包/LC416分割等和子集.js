// 当我们将一个整数与 1 进行按位与操作时，实际上是在检查这个整数的二进制表示的最低位是否为 1。
// 在二进制表示中，奇数的最低位是 1，偶数的最低位是 0。
// 因此，sum & 1 的结果为 1 表示 sum 是奇数，结果为 0 表示 sum 是偶数。

var canPartition = function (nums) {
    const sum = (nums.reduce((acc, cur) => acc + cur));
    if (sum & 1) return false;
    const dp = Array(sum / 2 + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    return dp[sum / 2] === sum / 2;
};