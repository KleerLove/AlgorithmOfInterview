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

    function dfs(i) {
        if (i === len) {
            ans.push([...path]); // 复制 path
            return;
        }
        for (let j = i; j < len; j++) { // 枚举子串的结束位置
            if (isPalindrome(s, i, j)) {
                path.push(s.substring(i, j + 1));
                dfs(j + 1);
                path.pop(); // 恢复现场
            }
        }
    }

    dfs(0);
    return ans;
};