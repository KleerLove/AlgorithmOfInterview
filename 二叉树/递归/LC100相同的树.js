var isSameTree = function (p, q) {
    if (p === null || q === null) {
        return p === q;
    }
    // 左对左, 右对右
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};