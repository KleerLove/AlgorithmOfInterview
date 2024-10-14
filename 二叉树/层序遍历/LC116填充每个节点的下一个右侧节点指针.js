// 本题依然是层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点

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
        for(let i = 0; i < len; i++){
            const node = queue.shift();
            if(i < len - 1) node.next = queue[0]; //
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
}