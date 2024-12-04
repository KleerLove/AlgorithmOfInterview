var reverseStr = function (s, k) {
    s = s.split('');
    const arr = [];
    while (s.length > 0) {
        if (s.length >= 2 * k) {
            let str = s.splice(0, 2 * k);
            arr.push(str.splice(0, k).reverse().join(''));
            arr.push(str.join(''));
        } else {
            if (s.length < k) {
                arr.push(s.splice(0, s.length).reverse().join(''));
            } else {
                arr.push(s.splice(0, k).reverse().join(''));
                arr.push(s.splice(0, s.length).join(''));
            }
        }
    }
    return arr.join('');
};

// 随想录
var reverseStr = function(s, k) {
    const len = s.length;
    let resArr = s.split(""); 
    for(let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i - 1, r = i + k > len ? len : i + k;
        while(++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join("");
};