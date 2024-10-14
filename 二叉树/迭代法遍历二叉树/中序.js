// 中序遍历：左中右
// 压栈顺序：右中左

function fn(root, res = []) {
    const stack = [];
    root && stack.push(root);
    while(stack.length){
        const node = stack.pop();
        if(!node){
            res.push(stack.pop().val);
            continue;
        }
        node.right && stack.push(node.right);
        stack.push(node);
        stack.push(null);
        node.left && stack.push(node.left);
    }
    return res;
}