// (也可以复用257, 但时间复杂度较高)

var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    // 如果当前节点是叶子节点，检查路径和是否等于目标和
    if (!root.left && !root.right) return targetSum === root.val;
    // 递归检查左右子树，减去当前节点的值
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};