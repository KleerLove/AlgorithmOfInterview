var letterCombinations = function (digits) {
    const len = digits.length;
    const arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (len <= 1) return len ? arr[digits].split("") : [];

    const result = []; 
    const path = [];
    function backtracking(digi, i) {
        if (path.length === len) {
            result.push(path.join(''));
            return;
        }
        const number = digi[i];
        for (const v of arr[number]) {
            path.push(v);
            backtracking(digi, i + 1);
            path.pop();
        }
    }
    backtracking(digits, 0);
    return result;
};