// 双指针
var largestRectangleArea = function(heights) {
    const len = heights.length;
    const minLeftIndex = new Array(len);
    const maxRightIndex = new Array(len);
    // 记录每个柱子 左边第一个小于该柱子的下标
    minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环
    for(let i = 1; i < len; i++) {
        let t = i - 1;
        // 这里不是用if，而是不断向左寻找的过程
        while (t >= 0 && heights[t] >= heights[i]) {
			t = minLeftIndex[t];
		}
        minLeftIndex[i] = t;
    }
    // 记录每个柱子 右边第一个小于该柱子的下标
    maxRightIndex[len - 1] = len; // 注意这里初始化，防止下面while死循环
    for(let i = len - 2; i >= 0; i--){
        let t = i + 1;
        // 这里不是用if，而是不断向右寻找的过程
        while (t <= len && heights[t] > heights[i]) {
			t = maxRightIndex[t];
		}
        maxRightIndex[i] = t;
    }
    // 求和
    let maxArea = 0;
    for(let i = 0; i < len; i++){
        const sum = heights[i] * (maxRightIndex[i] - minLeftIndex[i] - 1);
        maxArea = Math.max(maxArea , sum);
    }
    return maxArea;
};

//单调栈
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0,...heights,0]; // 数组头部加入元素0 数组尾部加入元素0
    for(let i = 0; i < heights.length; i++){ // 只用考虑情况一 当前遍历的元素heights[i]小于栈顶元素heights[stack[stack.length-1]]]的情况
        while(heights[i] < heights[stack[stack.length-1]]){// 当前bar比栈顶bar矮
            const stackTopIndex = stack.pop();// 栈顶元素出栈，并保存栈顶bar的索引
            let w = i - stack[stack.length -1] - 1;
            let h = heights[stackTopIndex]
            // 计算面积，并取最大面积
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);// 当前bar比栈顶bar高了，入栈
    }
    return maxArea;
};