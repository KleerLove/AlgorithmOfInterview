// 单词就是物品，字符串s就是背包，单词能否组成字符串s，就是问物品能不能把背包装满。
// 拆分时可以重复使用字典中的单词，说明就是一个完全背包
// dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
// 如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。（j < i ）。
// 递推公式是 if([j, i] 这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。
// 从递推公式中可以看出，dp[i] 的状态依靠 dp[j]是否为true，那么dp[0]就是递推的根基，dp[0]一定要为true，否则递推下去后面都都是false了。
// 而本题其实我们求的是排列数，为什么呢。 强调物品之间顺序。
// 所以说，本题一定是 先遍历 背包，再遍历物品。

const wordBreak = (s, wordDict) => {

    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = 0; i <= s.length; i++){
        for(let j = 0; j < wordDict.length; j++) {
            if(i >= wordDict[j].length) {
                if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }

    return dp[s.length];
}