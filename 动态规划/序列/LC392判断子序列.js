// 双指针
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(i !== s.length && j !== t.length){
        if(s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;
};

// 动态规划(编辑距离)
// dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]
// if (s[i - 1] == t[j - 1])，那么dp[i][j] = dp[i - 1][j - 1] + 1;
// 因为找到了一个相同的字符，相同子序列长度自然要在dp[i-1][j-1]的基础上加1（如果不理解，在回看一下dp[i][j]的定义）
// if (s[i - 1] != t[j - 1])，此时相当于t要删除元素
// t如果把当前元素t[j - 1]删除，那么dp[i][j] 的数值就是 看s[i - 1]与 t[j - 2]的比较结果了，即：dp[i][j] = dp[i][j - 1];
// 1143.最长公共子序列 递推公式基本那就是一样的，区别就是 本题 如果删元素一定是字符串t，而 1143.最长公共子序列 是两个字符串都可以删元素
var isSubsequence = function(s, t) {
    let len1 = s.length, len2 = t.length;
    let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if(s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = dp[i][j-1]; // 
            }
        }
    }
    return dp[len1][len2] === len1;
};
