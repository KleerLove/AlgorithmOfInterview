// 布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false
// 当s[i]与s[j]不相等，那没啥好说的了，dp[i][j]一定是false。
// 当s[i]与s[j]相等时，这就复杂一些了，有如下三种情况
// 情况一：下标i 与 j相同，同一个字符例如a，当然是回文子串
// 情况二：下标i 与 j相差为1，例如aa，也是回文子串
// 情况三：下标：i 与 j相差大于1的时候，例如cabac，此时s[i]与s[j]已经相同了，我们看i到j区间是不是回文子串就看aba是不是回文就可以了
// 那么aba的区间就是 i+1 与 j-1区间，这个区间是不是回文就看dp[i + 1][j - 1]是否为true。
const countSubstrings0 = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = 0;
    let dp = Array.from(Array(strLen), () => Array(strLen).fill(false));

    for (let j = 0; j < strLen; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j]) {
                if ((j - i) < 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
                numOfPalindromicStr += dp[i][j] ? 1 : 0;
            }
        }
    }

    return numOfPalindromicStr;
}

// 中心扩散法
const countSubstrings1 = (s) => {
    const strLen = s.length;
    let numOfPalindromicStr = 0;

    for (let i = 0; i < 2 * strLen - 1; i++) {
        let left = Math.floor(i / 2);
        let right = left + i % 2;

        while (left >= 0 && right < strLen && s[left] === s[right]) {
            numOfPalindromicStr++;
            left--;
            right++;
        }
    }

    return numOfPalindromicStr;
}