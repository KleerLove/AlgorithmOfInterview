// 本题其实是尽量让石头分成重量相同的两堆（尽可能相同），相撞之后剩下的石头就是最小的。
// 一堆的石头重量是sum，那么我们就尽可能拼成 重量为 sum / 2 的石头堆。 
// 这样剩下的石头堆也是 尽可能接近 sum/2 的重量。 
// 那么此时问题就是有一堆石头，每个石头都有自己的重量，是否可以 装满 最大重量为 sum / 2的背包。

var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((acc, cur) => acc + cur);
    const dpLen = Math.floor(sum / 2); // 避免出现浮点数
    const dp = new Array(dpLen + 1).fill(0);
    for(let i = 0; i < stones.length; i++){
        for(let j = dpLen; j >= stones[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return Math.abs((sum - dp[dpLen]) - dp[dpLen]);
};