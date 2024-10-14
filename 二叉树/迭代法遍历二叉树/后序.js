// 后序遍历：左右中
// 压栈顺序：中左右

function fn(root, res = []) {
    const stack = [];
    root && stack.push(root);
    while(stack.length){
        const node = stack.pop();
        if(!node){
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node);
        stack.push(null);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return res;
}