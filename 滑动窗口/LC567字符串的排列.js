// 方法一
function checkInclusion(s1, s2) {
    const s1Len = s1.length, s2Len = s2.length;
    if (s1Len > s2Len) return false;

    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);

    // 计算 s1 和 s2 的前 s1.length 个字符的频率
    for (let i = 0; i < s1Len; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // 比较两个数组是否相等的函数
    const matches = () => s1Count.every((count, idx) => count === s2Count[idx]);

    for (let i = 0; i <= s2Len - s1Len; i++) {
        if (matches()) return true;

        // 移动窗口
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        if (i + s1Len < s2Len) {
            s2Count[s2.charCodeAt(i + s1Len) - 'a'.charCodeAt(0)]++;
        }
    }

    return matches();
}

// 方法二
var checkInclusion = function(s1, s2) {
    const pArr = countLetters(s1); // 数组存储s1中每个字符出现的次数
    for(let i = 0; i < s2.length; i++){
        const addIndex = s2[i].charCodeAt(0) - 97;
        pArr[addIndex]--; // 窗口新增字母，数组对应元素-1
        if(s2[i - s1.length]){
            const subIndex = s2[i - s1.length].charCodeAt(0) - 97;
            pArr[subIndex]++; // 窗口删除字母，数组对应元素+1
        }
        if(pArr.every(element => element === 0)) return true; // 数组元素全0，匹配成功
    }
    return false;
};

// 数组存储小写字母 'a' 到 'z' 的出现次数。数组的索引对应字母的顺序
function countLetters(str) {
    // 初始化一个长度为26的数组，每个元素初始值为0
    const letterCount = new Array(26).fill(0);

    // 遍历字符串
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        // 检查是否为小写字母
        if (letter >= 'a' && letter <= 'z') {
            // 计算字母对应的数组索引
            const index = letter.charCodeAt(0) - 97;
            // 增加对应索引处的值
            letterCount[index]++;
        }
    }

    return letterCount;
}
