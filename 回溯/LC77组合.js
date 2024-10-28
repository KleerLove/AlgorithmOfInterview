/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
var combine = function (n, k) {
    const result = [];
    // start是枚举选择的起点 path是当前构建的路径（组合）
    function dfs(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(1, []);
    return result;
};