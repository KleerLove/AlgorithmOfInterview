var canVisitAllRooms = function(rooms) {
    const stack = [0]; // 使用栈实现DFS，初始访问0号房间
    const visited = new Set(); // 记录已访问的房间

    while (stack.length > 0) {
        const current = stack.pop(); // 弹出栈顶元素
        if (visited.has(current)) continue; // 跳过已访问的房间
        visited.add(current); // 标记为已访问
        // 将当前房间的钥匙加入栈中，后续会处理这些房间
        stack.push(...rooms[current]);
    }

    // 判断是否所有房间都被访问过
    return visited.size === rooms.length;
};