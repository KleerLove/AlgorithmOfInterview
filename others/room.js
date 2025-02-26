function designRoom(n, m, p, q) {
    // 创建n行m列的二维数组，初始值为1（机器）
    const room = Array.from({ length: n }, () => Array(m).fill(1));
    
    // 设置门口位置为0
    room[p][q] = 0;
    
    // 核心修正：所有偶数列设为过道（垂直方向连通）
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j % 2 === 0) {
                room[i][j] = 0; // 偶数列全为过道
            }
        }
    }
    
    // 处理特殊情况：门口在奇数列时，横向连接到最近的偶数列
    if (q % 2 !== 0) {
        // 确定最近的偶数列方向（优先左，次优右）
        const left = q - 1;
        const right = q + 1;
        let connectCol = -1;
        
        if (left >= 0 && left % 2 === 0) {
            connectCol = left;
        } else if (right < m && right % 2 === 0) {
            connectCol = right;
        } else {
            // 边界情况处理（如房间宽度为1）
            connectCol = (q === 0) ? 0 : m - 1;
        }
        
        // 横向连接门口到偶数列
        const start = Math.min(q, connectCol);
        const end = Math.max(q, connectCol);
        for (let j = start; j <= end; j++) {
            room[p][j] = 0;
        }
    }
    
    return room;
}

function printRoom(room) {
    const rows = room.length;
    const cols = room[0].length;
    
    // 生成顶部边框
    // let border = "┌" + "───".repeat(cols) + "┐";
    
    // 生成房间内容
    const content = room.map(row => {
        // return "│ " + row.map(cell => cell === 0 ? "□" : "■").join(" │ ") + " │";
        return row.map(cell => cell === 0 ? "□" : "■").join(" ");
    }).join("\n");
    
    // 生成底部边框
    // border += "\n" + content + "\n└" + "───".repeat(cols) + "┘";
    
    console.log(content);
}

// 使用示例
const room = designRoom(5, 10, 0, 1);
printRoom(room);