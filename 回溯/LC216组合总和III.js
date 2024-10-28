// 与77题基本一致
// 可以理解为 返回范围 [1, 9] 中所有可能的 k 个数的组合, 且该组合所有元素之和为 n
var combinationSum3 = function (k, n) {
    const result = [];
    // start是枚举选择的起点 path是当前构建的路径（组合）
    function dfs(start, path) {
        if (path.length === k) {
            if(path.reduce((acc, cur) => acc + cur) === n) result.push([...path]);
            return;
        }
        for (let i = start; i <= 9; i++) {
            path.push(i);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(1, []);
    return result;
};

// 增加一些剪枝操作, 优化代码
var combinationSum3 = function (k, n) {
    const result = [];
    let sum = 0; //
    function dfs(start, path) {
        if(sum > n){ //
            return;
        }
        if (path.length === k) {
            if(sum === n) result.push([...path]);
            return;
        }
        for (let i = start; i <= 9; i++) {
            path.push(i);
            sum += i;
            dfs(i + 1, path);
            path.pop();
            sum -= i;
        }
    }
    dfs(1, []);
    return result;
};