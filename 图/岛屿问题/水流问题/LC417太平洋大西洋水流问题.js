// 典型的 ​逆向DFS/BFS​ 问题：
// ​逆向思维：从边界向内陆逆向寻找能到达的单元格（从低到高）。
// ​两次遍历：
// 第一次从太平洋边界出发，标记所有能到达太平洋的单元格。
// 第二次从大西洋边界出发，标记所有能到达大西洋的单元格。
// ​交集：同时被两次遍历标记的单元格即为答案。
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const xLen = heights.length;
    const yLen = heights[0].length;
    const pacific = new Array(xLen).fill().map(() => new Array(yLen).fill(false));
    const atlantic = new Array(xLen).fill().map(() => new Array(yLen).fill(false));
    const res = [];
    function dfs(x, y, val, ocean) {
        if (x >= xLen || y >= yLen || x < 0 || y < 0 || heights[x][y] < val || ocean[x][y]) return;
        ocean[x][y] = true;
        dfs(x + 1, y, heights[x][y], ocean);
        dfs(x, y + 1, heights[x][y], ocean);
        dfs(x - 1, y, heights[x][y], ocean);
        dfs(x, y - 1, heights[x][y], ocean);
    }
    // 从边界出发
    for (let i = 0; i < yLen; i++) {
        dfs(0, i, heights[0][i], pacific);
        dfs(xLen - 1, i, heights[xLen - 1][i], atlantic);
    }
    for (let j = 0; j < xLen; j++) {
        dfs(j, 0, heights[j][0], pacific);
        dfs(j, yLen - 1, heights[j][yLen - 1], atlantic);
    }
    // 获取交集
    for (let n = 0; n < xLen; n++) {
        for (let m = 0; m < yLen; m++) {
            if (pacific[n][m] && atlantic[n][m]) res.push([n, m]);
        }
    }
    return res;
};