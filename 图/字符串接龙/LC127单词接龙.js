// yonyou

function findTransformationPath(oldName, newName, candidates) {
    // 判断两个名字是否只差一个字母
    function isOneLetterDiff(word1, word2) {
        let diffCount = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                diffCount++;
                if (diffCount > 1) {
                    return false;
                }
            }
        }
        return diffCount === 1;
    }

    // 广度优先搜索（BFS）来寻找转换路径
    function bfs(start, target, candidatesSet) {
        let queue = [[start]]; // 存储路径
        let visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            let path = queue.shift(); // 当前路径
            let currentWord = path[path.length - 1]; // 当前路径的最后一个名字

            // 如果找到了目标名字，返回路径
            if (currentWord === target) {
                return path;
            }

            // 扩展当前名字，寻找所有只差一个字母的候选名字
            for (let candidate of candidatesSet) {
                if (!visited.has(candidate) && isOneLetterDiff(currentWord, candidate)) {
                    visited.add(candidate);
                    queue.push([...path, candidate]);
                }
            }
        }

        return null; // 无法找到转化路径
    }

    // 如果名字长度不一致，直接返回 null
    if (oldName.length !== newName.length) {
        return null;
    }

    // 将候选名字转换为 Set 以便快速查找
    let candidatesSet = new Set(candidates);

    // 执行 BFS 查找路径
    return bfs(oldName, newName, candidatesSet);
}

// 示例用法
const oldName = "hit";
const newName = "cog";
const candidates = ["hot", "dot", "dog", "lot", "log", "cog"];

const result = findTransformationPath(oldName, newName, candidates);
console.log(result); // 输出转化路径，若无法转换则为 null
