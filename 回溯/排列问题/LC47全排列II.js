var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b) // 有重复元素固定套路
    const result = []

    function backtracing(path, used) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // 一定要加上 used[i - 1] == false或者used[i - 1] == true
            // 因为 used[i - 1] 要一直是 true 或者一直是false 才可以，而不是 一会是true 一会又是false
            // 如果nums[i-1]被使用过，它会被|| used[i]修剪掉，不是选项了，即便它和nums[i]重复，nums[i]还是可以选的
            if ((i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) || used[i]) {
                continue
            }
            used[i] = true
            path.push(nums[i])
            backtracing(path, used)
            path.pop()
            used[i] = false
        }
    }
    backtracing([], [])
    return result
};