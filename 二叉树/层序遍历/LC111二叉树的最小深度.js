// 当左右孩子都为空的时候，才说明遍历的最低点

function fn(root){
    const queue = [];
    const result = [];
    if(root){
        queue.push(root);
    }else{
        return result.length;
    }
    while(queue.length !== 0){
        const len = queue.length;
        const curLevel = [];
        for(let i = 0; i < len; i++){
            const node = queue.shift();
            curLevel.push(node.val);
            if(!node.left && !node.right){ //
                return result.length + 1;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        result.push(curLevel);
    }
}