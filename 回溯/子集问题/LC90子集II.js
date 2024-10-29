var subsetsWithDup = function (nums) {
    let result = []
    let path = []
    nums.sort((a, b) => a - b); // 
    function backtracking(startIndex) {
        result.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            // 去重, 要对同一树层使用过的元素(值相同的元素)进行跳过
            if(i > startIndex && nums[i] === nums[i - 1]) continue;
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};