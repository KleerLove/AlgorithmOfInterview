var permute = function(nums) {
    const result = [];
    function dfs(path){
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }
        // 全排列从零开始
        for(let i = 0; i < nums.length; i++){
            if(path.includes(nums[i])) continue; // 防止重复元素
            path.push(nums[i]);
            dfs(path);
            path.pop();
        }
    }
    dfs([]);
    return result;
};

// 时间复杂度优化写法, 使用used数组记录使用过的元素
var permute = function(nums) {
    const res = [];
    
    function backtracking(path, used) {
        if(path.length === nums.length) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < nums.length; i++ ) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true; // 同支
            backtracking(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtracking([], []);
    return res;
};