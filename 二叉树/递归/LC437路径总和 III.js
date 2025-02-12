// 前缀和 + 哈希表
// 思路类似 LC560和为 K 的子数组

const pathSum = function(root, targetSum) {
    let ans = 0;
    const map = {0: 1}; // 把 sum[0] = 0 统计进来
    function dfs(node, sum) {
        if (node === null) {
            return;
        }
        sum += node.val;
        if(map[sum - targetSum]) ans += map[sum - targetSum];
        map[sum] = (map[sum] ?? 0) + 1;
        dfs(node.left, sum);
        dfs(node.right, sum);
        map[sum]--; // 恢复现场(非常重要, 避免重复计算)
    }
    dfs(root, 0);
    return ans;
};