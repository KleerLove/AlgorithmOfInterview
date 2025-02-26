// 实现类似岛屿数量
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let res = 0;
    // 遍历整张图, 寻找陆地
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let space = [0];
                turnZero(i, j, grid, space);
                res = Math.max(res, space[0]);
            }
        }
    }
    return res;
}

// dfs递归, 把所有的相连的陆地变成海洋
function turnZero(i, j, grid, space) {
    // 超出矩阵边界或遇到 0, 直接返回
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return
    grid[i][j] = 0
    space[0]++;
    turnZero(i, j + 1, grid, space)
    turnZero(i, j - 1, grid, space)
    turnZero(i + 1, j, grid, space)
    turnZero(i - 1, j, grid, space)
}