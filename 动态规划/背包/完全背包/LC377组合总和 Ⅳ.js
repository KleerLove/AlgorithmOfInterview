// 只求个数, 所以不用回溯法

// 本质和 LC518零钱兑换 II 一样

// 原代码采用的是先遍历物品（即 nums 数组），再遍历背包容量（即 target）的顺序。
// 但在本题中，顺序不同的序列被视作不同的组合，所以应该先遍历背包容量，再遍历物品，这样才能保证不同顺序的组合都能被统计到。

const combinationSum4 = (nums, target) => {
    let dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i <= target; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }

    return dp[target];
};