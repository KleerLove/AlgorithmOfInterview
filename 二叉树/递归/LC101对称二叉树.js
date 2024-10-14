// 思路1: 翻转根节点的右子树(226) 判断其与左子树是否相同(100)
// 思路2: 直接修改判断是否是相同的树(100)的逻辑

var isSameTree = function (p, q) {
    if(!p || !q) return p === q;
    // 本来是左对左, 右对右, 现在取反
    return p === q && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
};

