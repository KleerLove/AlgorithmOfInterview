// ??是一个空值合并运算符。
// 从左到右返回第一个已定义（非 null 和非 undefined）的值。

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    }
    return left ?? right;
};