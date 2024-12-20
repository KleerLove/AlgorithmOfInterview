var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;

    const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
    let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
    const root = new TreeNode(rootVal); // 创建中间节点
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex)); // 创建左节点
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex)); // 创建右节点

    return root;
};

// 类似问题: 654. 最大二叉树
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null;

    const rootVal = Math.max(...nums);
    const rootIndex = nums.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
    root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1));

    return root;
};