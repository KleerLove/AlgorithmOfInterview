// dfs
// 方法一：DFS（递归）
function validPath(n, edges, source, destination) {
    if (source === destination) return true; // 直接返回true
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // 无向图需双向添加
    }
    const visited = new Set();

    const dfs = (node) => {
        if (node === destination) return true;
        visited.add(node);
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor) && dfs(neighbor)) {
                return true;
            }
        }
        return false;
    };

    return dfs(source);
}

// 方法二：DFS（栈迭代）
function validPath(n, edges, source, destination) {
    if (source === destination) return true;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const stack = [source];
    const visited = new Set([source]);

    while (stack.length > 0) {
        const node = stack.pop();
        for (const neighbor of adj[node]) {
            if (neighbor === destination) return true;
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    return false;
}

// bfs
function validPath(n, edges, source, destination) {
    if (source === destination) return true;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const queue = [source];
    const visited = new Set([source]);

    while (queue.length > 0) {
        const node = queue.shift(); // 或改用索引优化
        for (const neighbor of adj[node]) {
            if (neighbor === destination) return true;
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return false;
}

// 并查集
function validPath(n, edges, source, destination) {
    if (source === destination) return true;
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(1);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 路径压缩
        }
        return parent[x];
    };

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return;
        // 按秩合并
        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    };

    for (const [u, v] of edges) {
        union(u, v);
    }

    return find(source) === find(destination);
}