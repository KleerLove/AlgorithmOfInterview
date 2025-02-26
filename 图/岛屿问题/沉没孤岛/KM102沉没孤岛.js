// 只需要稍微修改 孤岛的总面积
// 把非孤岛的值++, 再遍历数组, 把所有陆地数值--, 孤岛就沉没了

const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;

let graph // 地图
let N, M // 地图大小
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]] //方向


// 读取输入，初始化地图
const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number);
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0))

    for (let i = 0; i < N; i++) {
        line = await readline()
        line = line.split(' ').map(Number)
        for (let j = 0; j < M; j++) {
            graph[i][j] = line[j]
        }
    }
}


/**
 * @description: 从（x，y）开始深度优先遍历地图
 * @param {*} graph 地图
 * @param {*} x 开始搜索节点的下标
 * @param {*} y 开始搜索节点的下标
 * @return {*}
 */
const dfs = (graph, x, y) => {
    if (graph[x][y] === 0 || graph[x][y] === 2) return
    graph[x][y]++ // 非孤岛++
    for (let i = 0; i < 4; i++) {
        let nextx = x + dir[i][0]
        let nexty = y + dir[i][1]
        if (nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue
        dfs(graph, nextx, nexty)
    }
}

(async function () {

    // 读取输入，初始化地图
    await initGraph()

    // 遍历地图左右两边
    for (let i = 0; i < N; i++) {
        if (graph[i][0] === 1) dfs(graph, i, 0)
        if (graph[i][M - 1] === 1) dfs(graph, i, M - 1)
    }

    // 遍历地图上下两边
    for (let j = 0; j < M; j++) {
        if (graph[0][j] === 1) dfs(graph, 0, j)
        if (graph[N - 1][j] === 1) dfs(graph, N - 1, j)
    }

    count = 0
    // 将所有陆地沉没一格
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] !== 0) graph[i][j]--;
        }
    }
    
    for(const n of graph){
        console.log(n.join(' '));
    }
})()