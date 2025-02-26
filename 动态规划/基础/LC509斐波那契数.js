// dp
var fib = function(n) {
    const dp = [0, 1];
    if(n <= 1) return dp[n];
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// 内存优化
var fib = function(n) {
    if(n <= 1) return n;
    let last = 1;
    let lastOfLast = 0;
    let result = 0;
    for(let i = 2; i <= n; i++){
        result = last + lastOfLast;
        lastOfLast = last;
        last = result;
    }
    return result;
};