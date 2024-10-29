var combinationSum = function (candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b); // 排序(为了剪枝)
    let sum = 0;
    function dfs(start, path) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push([...path]);
            return;
        }
        // 从 start 开始, 表示组合(如果从 0 开始, 即为全排列)
        for (let i = start; i < candidates.length; i++) {
            const n = candidates[i];
            // 对总集合排序之后，如果下一层的sum（就是本层的 sum + candidates[i]）已经大于target，就可以结束本轮for循环的遍历。
            if (sum + n > target) break; 
            path.push(n);
            sum += n;
            dfs(i, path); // 不用 i+1 了，表示可以重复读取当前的数
            path.pop();
            sum -= n;
        }
    }
    dfs(0, []);
    return result;
};