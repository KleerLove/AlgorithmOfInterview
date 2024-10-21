// 前序遍历：中左右
// 压栈顺序：右左中

function fn(root, res = []) {
    const stack = [];
    root && stack.push(root);
    while(stack.length){
        const node = stack.pop();
        if(node === null){
            res.push(stack.pop().val);
            continue;
        }
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
        stack.push(node);
        stack.push(null);
    }
    return res;
}