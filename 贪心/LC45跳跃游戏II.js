// 自己想的动态规划
var jump = function (nums) {
    // dp[i] => 到达i花费的最小步数
    const dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    // 遍历, 更新能跳到格子的dp
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        for (let j = 1; j <= n; j++) {
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }
    return dp[nums.length - 1];
};

// 自己想的贪心
var jump = function (nums) {
    let step = 0;
    let start = 0; // 该步数相比于上一步新增的能跳到的第一个格子
    let end = 0; // 该步数能跳到的最远处
    while (end < nums.length - 1) {
        let temp = end;
        // 遍历新增的能跳到的格子, 更新最远能到达
        for (let i = start; i <= end; i++) {
            temp = Math.max(temp, nums[i] + i);
        }
        start = end + 1;
        end = temp;
        step++;
    }
    return step;
};

// 随想录的贪心
var jump = function (nums) {
    let steps = 0
    let curIndex = 0
    let nextIndex = 0
    for (let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(nums[i] + i, nextIndex)
        if (i === curIndex) {
            curIndex = nextIndex
            steps++
        }
    }

    return steps
};

//笨猪爆破组贪心
var jump = function (nums) {
    let steps = 0
    let farthestPos = 0 // 记录当前能去到的最远的位置，遍历每个点都会求能跳到的最远位置，与它比较，如果把它大就更新它
    let endOfCanReach = 0
    for (let i = 0; i < nums.length - 1; i++) {
        farthestPos = Math.max(farthestPos, i + nums[i])
        if (i === endOfCanReach) {
            endOfCanReach = farthestPos // 可抵达区间的右端位置
            steps++
        }
        if (endOfCanReach >= nums.length - 1) { // 一旦新的可抵达区间触碰到nums数组的边界，则直接break，不用对区间的点遍历了
            break
        }
    }
    return steps
};
