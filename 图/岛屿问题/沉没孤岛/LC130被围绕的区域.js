// 思路与沉没孤岛一致
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const xLen = board.length;
    const yLen = board[0].length;
    let res = 0;
    function dfs(x, y) {
        if (x >= xLen || y >= yLen || x < 0 || y < 0 || board[x][y] !== 'O') return;
        board[x][y] = 0;
        dfs(x + 1, y);
        dfs(x, y + 1);
        dfs(x - 1, y);
        dfs(x, y - 1);
    }
    function dfsSetX(x, y) {
        if (x >= xLen || y >= yLen || x < 0 || y < 0 || board[x][y] !== 'O') return;
        board[x][y] = 'X';
        dfsSetX(x + 1, y);
        dfsSetX(x, y + 1);
        dfsSetX(x - 1, y);
        dfsSetX(x, y - 1);
    }
    for (let i = 0; i < yLen; i++) {
        if (board[0][i] === 'O') dfs(0, i);
        if (board[xLen - 1][i] === 'O') dfs(xLen - 1, i);
    }
    for (let j = 0; j < xLen; j++) {
        if (board[j][0] === 'O') dfs(j, 0);
        if (board[j][yLen - 1] === 'O') dfs(j, yLen - 1);
    }
    for (let n = 0; n < xLen; n++) {
        for (let m = 0; m < yLen; m++) {
            if (board[n][m] === 'O') dfsSetX(n, m);
            if (board[n][m] === 0) board[n][m] = 'O';
        }
    }
    return board;
};