// 动态规划
// 假设加法的总和为x，那么减法对应的总和就是sum - x。
// 所以我们要求的是 x - (sum - x) = target
// x = (target + sum) / 2
// 此时问题就转化为，用nums装满容量为x的背包，有几种方法。

const findTargetSumWays0 = (nums, target) => {

    const sum = nums.reduce((acc, cur) => acc + cur);

    if (Math.abs(target) > sum || (target + sum) % 2 === 1) {
        return 0;
    }

    const halfSum = (target + sum) / 2;

    let dp = new Array(halfSum + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[halfSum];
};

// 回溯写法
const findTargetSumWays1 = (nums, target) => {
    /**
     * @param {*} layer 当前递归树层数，也代表了当前操作考虑 nums 数组中第几个数字
     * @param {*} nums
     * @param {*} target 代表剩下的数字的目标和
     * @returns
     */
    const dfs = (layer, nums, target) => {
        if (layer == nums.length) {
            // nums 中所有数字考虑完毕，到达了递归树的叶结点，如果 target 为 0 代表当前结点是一个解
            if (target == 0) res++;
            return;
        }
        dfs(layer + 1, nums, target + nums[layer]); // nums[layer] 取负
        dfs(layer + 1, nums, target - nums[layer]); // nums[layer] 取正
    }

    let res = 0;
    dfs(0, nums, target);
    return res;
};