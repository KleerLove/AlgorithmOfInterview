// 堆
// 将数组元素类比为扑克牌，通过模拟分堆的过程来找到最长递增子序列的长度。具体思路如下：
// 遍历数组中的每个元素（扑克牌）。
// 尝试将当前元素放入已有的堆中，放入的规则是：该堆的最后一个元素要大于等于当前元素。
// 如果找不到合适的堆，则为当前元素创建一个新的堆。
// 最终堆的数量就是最长递增子序列的长度。

var lengthOfLIS = function(nums) {
    // 初始化一个空数组 piles 用于存储堆
    const piles = [];
    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        // 用于标记是否将当前元素放入了已有的堆中
        let flag = false;
        // 遍历所有已有的堆
        for(let j = 0; j < piles.length && !flag; j++){
            const arr = piles[j];
            const len = arr.length;
            // 如果当前堆的最后一个元素大于等于当前元素, 将当前元素放入该堆, 标记为已放入堆中
            if(arr[len - 1] >= n){
                arr.push(n);
                flag = true;
            }
        }
        // 如果没有将当前元素放入任何已有的堆中, 为当前元素创建一个新的堆
        if(!flag){
            piles.push([n]);
        }
    }
    // 最终堆的数量就是最长递增子序列的长度
    return piles.length;
};


// 动态规划
// dp[i]表示i之前包括i的以nums[i]结尾的最长递增子序列的长度
// if (nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1);
var lengthOfLIS = function(nums) {
    // 初始化 dp 数组，长度为 nums 的长度，每个元素初始值为 1
    // 因为每个元素自身可以构成一个长度为 1 的递增子序列
    const dp = new Array(nums.length).fill(1);
    
    // 外层循环遍历数组 nums 中的每个元素
    for(let i = 0; i < nums.length; i++){
        // 内层循环遍历当前元素 nums[i] 之前的所有元素
        for(let j = 0; j < i; j++){
            // 如果 nums[j] 小于 nums[i]，说明可以将 nums[i] 接在以 nums[j] 结尾的递增子序列后面
            if(nums[j] < nums[i]){
                // 更新 dp[i] 的值，取当前 dp[i] 和 dp[j] + 1 中的较大值
                // dp[j] + 1 表示将 nums[i] 接在以 nums[j] 结尾的递增子序列后面后的长度
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // 最终结果是 dp 数组中的最大值，因为最长递增子序列可能以数组中的任意元素结尾
    return Math.max(...dp);
};