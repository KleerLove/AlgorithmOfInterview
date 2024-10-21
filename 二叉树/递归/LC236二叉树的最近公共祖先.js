// ??是一个空值合并运算符。
// 从左到右返回第一个已定义（非 null 和非 undefined）的值。

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 如果 left 和 right 都不为 null，说明 p 和 q 分别在当前节点 root 的左右子树中，那么当前节点 root 就是它们的最近公共祖先
    if (left && right) {
        return root;
    }
    // 如果 left 和 right 只有一个不为 null，说明 p 和 q 都在同一侧子树中，那么直接返回不为 null 的那个子树的结果
    return left ?? right;
};