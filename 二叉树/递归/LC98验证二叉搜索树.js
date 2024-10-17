// 中序遍历搜索二叉树一定有序

var isValidBST = function(root) {
    const arr = [];
    function dfs(node) {
        if(!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= arr[i - 1]) return false;
    }
    return true;
};


//530. 二叉搜索树的最小绝对差
var getMinimumDifference = function(root) {
    const arr = [];
    function dfs(node) {
        if(!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    let min = Infinity;
    for(let i = 1; i < arr.length; i++){
        min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
    }
    return min;
};