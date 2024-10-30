var monotoneIncreasingDigits = function (n) {
    n = n.toString().split('').map(Number);
    let flag = Infinity // 标记从哪里开始赋值9
    for (let i = n.length - 1; i > 0; i--) {
        if (n[i - 1] > n[i]) {
            flag = i
            n[i - 1] = n[i - 1] - 1 // 前一个数-1
            n[i] = 9 // 这个数等于9
        }
    }

    for (let i = flag; i < n.length; i++) {
        n[i] = 9
    }

    return parseInt(n.join(''));
};