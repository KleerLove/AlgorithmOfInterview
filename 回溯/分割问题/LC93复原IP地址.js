var restoreIpAddresses = function (s) {
    const res = [];
    const path = [];

    function backtracking(start) {
        const len = path.length;
        if (len > 4) return;
        if (len === 4 && start === s.length) {
            res.push(path.join("."));
            return;
        }
        for (let j = start; j < s.length; j++) {
            const str = s.slice(start, j + 1);
            if (str.length > 3 || +str > 255) break;
            if (str.length > 1 && str[0] === "0") break;
            path.push(str);
            backtracking(j + 1);
            path.pop();
        }
    }

    backtracking(0, 0)
    return res;
};