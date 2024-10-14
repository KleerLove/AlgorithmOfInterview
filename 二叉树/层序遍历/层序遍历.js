// 队列

function fn(root){
    const queue = [];
    const result = [];
    if(root){
        queue.push(root);
    }else{
        return result;
    }
    while(queue.length !== 0){
        const len = queue.length;
        const curLevel = [];
        for(let i = 0; i < len; i++){
            const node = queue.shift();
            curLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        result.push(curLevel);
    }
    return result;
}