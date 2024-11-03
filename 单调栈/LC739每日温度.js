// 单调栈
// 通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，此时用单调栈
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const res = Array(len).fill(0);
    const stack = [0];  // 递增栈：用于存储元素右面第一个比他大的元素下标
    for (let i = 1; i < len; i++) {
        // 如果当前元素比栈顶大，则让小项逐个出栈，直到当前元素比栈顶小，停止出栈
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    return res;
};

// 暴力(超时)
var dailyTemperatures = function(temperatures) {
    const result = [];
    for(let i = 0; i < temperatures.length; i++){
        const n = temperatures[i];
        for(let j = i + 1; j < temperatures.length; j++){
            const m = temperatures[j];
            if(m > n){
                result[i] = j - i;
                break;
            }else if(j === temperatures.length - 1){
                result[i] = 0;
            }
        }
    }
    result.push(0)
    return result;
};