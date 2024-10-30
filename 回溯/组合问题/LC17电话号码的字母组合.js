var letterCombinations = function (digits) {
    const len = digits.length;
    const arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (len <= 1) return len ? arr[digits].split("") : [];

    const result = []; 
    const path = [];
    function backtracking(i) {
        if (path.length === len) {
            result.push(path.join(''));
            return;
        }
        const number = digits[i];
        for (const v of arr[number]) {
            path.push(v);
            backtracking(i + 1);
            path.pop();
        }
    }
    backtracking(0);
    return result;
};