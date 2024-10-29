// 子集是收集树形结构中树的所有节点的结果。
// 而组合问题、分割问题是收集树形结构中叶子节点的结果
var subsets = function (nums) {
    let result = []
    let path = []
    function backtracking(startIndex) {
        result.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};