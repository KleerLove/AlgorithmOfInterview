const partitionLabels = (S) => {
    const maxPos = {};
    for (let i = 0; i < S.length; i++) { // 存放字母与它的最远位置
        maxPos[S[i]] = i;
    }

    const res = [];
    let start = 0;                        // 待切割的起始位置
    let scannedCharMaxPos = 0;            // 已扫描的字符中最远的位置

    for (let i = 0; i < S.length; i++) {
        const curCharMaxPos = maxPos[S[i]]; // 当前扫描的字符的最远位置
        scannedCharMaxPos = Math.max(scannedCharMaxPos, curCharMaxPos); // 更新「已扫描的字符中最远的位置」
        if (i === scannedCharMaxPos) { // 正好扫描到「已扫描的字符的最远位置」，到达切割点
            res.push(i - start + 1);
            start = i + 1;              // 更新，下一个待切割的字符串的起始位置
        }
    }
    return res;
};