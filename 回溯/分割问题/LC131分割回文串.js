var isPalindrome = function(s, left, right) {
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false;
        }
    }
    return true;
}

var partition = function(s) {
    const len = s.length;
    const ans = [];
    const path = [];

    function dfs(start) {
        if (start === len) {
            ans.push([...path]); // 复制 path
            return;
        }
        for (let j = start; j < len; j++) { // 枚举子串的结束位置
            if (isPalindrome(s, start, j)) {
                path.push(s.substring(start, j + 1));
                dfs(j + 1);
                path.pop(); // 恢复现场
            }
        }
    }

    dfs(0);
    return ans;
};