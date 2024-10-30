var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let j = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const n = s[i];
        if (n >= g[j]) {
            result++;
            j++;
        }
    }
    return result;
};