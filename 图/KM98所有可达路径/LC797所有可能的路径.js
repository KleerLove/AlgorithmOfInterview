/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const len = graph.length;
    const path = [];
    const res = [];
    function dfs(x) {
        path.push(x); // 进入节点时记录
        if (x === len - 1) { // 正确终止条件
            res.push([...path]);
        } else {
            graph[x].forEach(i => {
                dfs(i); // 递归处理邻居
            });
        }
        path.pop(); // 回溯前移除当前节点
    }
    dfs(0);
    return res;
};