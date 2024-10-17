// 必须要通过节点的父节点来判断其左孩子是不是左叶子

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let result = 0;
    function fn(node) {
        if (!node) return;
        if (node.left && !node.left.left && !node.left.right) { //
            result += node.left.val;
        }
        fn(node.left);
        fn(node.right);
    }
    fn(root);
    return result;
};