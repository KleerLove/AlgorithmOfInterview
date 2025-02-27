const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputLines = []

rl.on('line', (line) => {
    inputLines.push(line)
})

rl.on('close', () => {
    let [n, edgesCount] = inputLines[0].trim().split(' ').map(Number)

    let graph = Array.from({ length: n + 1 }, () => { return [] })

    for (let i = 1; i < inputLines.length; i++) {
        let [from, to] = inputLines[i].trim().split(' ').map(Number)
        graph[from].push(to)
    }

    let visited = new Array(n + 1).fill(false)

    let dfs = (graph, key, visited) => {
        if (visited[key]) {
            return
        }

        visited[key] = true
        for (let nextKey of graph[key]) {
            dfs(graph, nextKey, visited)
        }
    }

    dfs(graph, 1, visited)

    for (let i = 1; i <= n; i++) {
        if (visited[i] === false) {
            console.log(-1)
            return
        }
    }
    console.log(1)

})