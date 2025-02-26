// 本质上就是求孤岛总面积
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    const xLen = grid.length;
    const yLen = grid[0].length;
    let res = 0;
    function dfs(x, y) {
        if (x >= xLen || y >= yLen || x < 0 || y < 0 || grid[x][y] === 0) return;
        grid[x][y] = 0;
        dfs(x + 1, y);
        dfs(x, y + 1);
        dfs(x - 1, y);
        dfs(x, y - 1);
    }
    for (let i = 0; i < yLen; i++) {
        if (grid[0][i] === 1) dfs(0, i);
        if (grid[xLen - 1][i] === 1) dfs(xLen - 1, i);
    }
    for (let j = 0; j < xLen; j++) {
        if (grid[j][0] === 1) dfs(j, 0);
        if (grid[j][yLen - 1] === 1) dfs(j, yLen - 1);
    }
    for(let n = 0; n < xLen; n++){
        for(let m = 0; m < yLen; m++){
            if(grid[n][m] === 1) res++;
        }
    }
    return res;
};