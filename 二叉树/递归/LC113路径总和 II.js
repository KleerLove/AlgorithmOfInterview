// 与 LC257二叉树的所有路径 类似

// 字符串存储路径。字符串是不可变的，每次修改会生成新字符串，递归调用时传递的是新值，各分支路径独立，互不影响。
// 数组存储路径。数组是可变对象，通过引用传递。所有递归分支共享同一数组引用, 所以需要 pop 恢复状态

var pathSum = function (root, targetSum) {
    //递归遍历+递归三部曲
    let res = [];
    //1. 确定递归函数 函数参数
    const getPath = function (node, curPath, sum) {
        curPath.push(node.val);
        sum += node.val;

        if (node.left === null && node.right === null) {
            if (sum === targetSum) res.push([...curPath]); // 拷贝当前路径
        } else {
            node.left && getPath(node.left, curPath, sum);
            node.right && getPath(node.right, curPath, sum);
        }

        curPath.pop(); // 关键回溯：移除当前节点，恢复路径状态
    };
    root && getPath(root, [], 0);
    return res;
};