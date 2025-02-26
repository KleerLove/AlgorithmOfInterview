/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
    const m = grid.length, n = grid[0].length;
    let islandId = 2; // 从2开始标记岛屿（避免与0/1冲突）
    const areaMap = new Map(); // 存储岛屿编号到面积的映射
    let maxArea = 0;

    // 预处理：标记所有原始岛屿并计算面积
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const area = dfs(i, j, islandId);
                areaMap.set(islandId, area);
                maxArea = Math.max(maxArea, area);
                islandId++;
            }
        }
    }

    // 枚举每个0，尝试翻转并计算面积
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const connected = new Set(); // 记录相邻的不同岛屿编号
                let currArea = 1; // 翻转后的当前格子贡献1
                for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    const x = i + dx, y = j + dy;
                    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] < 2) continue;
                    const id = grid[x][y];
                    if (!connected.has(id)) {
                        currArea += areaMap.get(id);
                        connected.add(id);
                    }
                }
                maxArea = Math.max(maxArea, currArea);
            }
        }
    }
    return maxArea;

    function dfs(x, y, id) {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) return 0;
        grid[x][y] = id;
        return 1 + dfs(x + 1, y, id) + dfs(x - 1, y, id) + dfs(x, y + 1, id) + dfs(x, y - 1, id);
    }
}