// kmp
var repeatedSubstringPattern = function (s) {
    if (s.length === 0) return false;

    const getNext = (s) => {
        const next = [0];
        let j = 0;
        for (let i = 1; i < s.length; ++i) {
            while (j > 0 && s[i] !== s[j]) j = next[j - 1];
            if (s[i] === s[j]) j++;
            next.push(j);
        }
        return next;
    }

    let next = getNext(s);
    if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0) return true;

    return false;
};

// 穷举
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    let str = s[0];
    let i = 1;
    while(str.length <= Math.floor(len / 2)){
        if(len % str.length === 0 && s === str.repeat(len / str.length)) return true;
        str += s[i];
        i++;
    }
    return false;
};