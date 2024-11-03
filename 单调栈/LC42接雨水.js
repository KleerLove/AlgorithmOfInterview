// 每一列雨水的高度，取决于，该列 左侧最高的柱子 和 右侧最高的柱子 中最矮的那个柱子的高度
// "双指针"
var trap = function(height) {
    const len = height.length;
    const leftMax = Array(len).fill(0);
    const rightMax = Array(len).fill(0);
    for(let i = 1; i < len; i++){
        leftMax[i] = Math.max(height[i - 1], leftMax[i - 1]);
    }
    for(let i = len - 2; i > 0; i--){
        rightMax[i] = Math.max(height[i + 1], rightMax[i + 1]);
    }
    let rain = 0;
    // 记得跳过第一个和最后一个
    for(let i = 1; i < len - 1; i++){
        const temp = Math.min(leftMax[i], rightMax[i]) - height[i];
        rain += temp > 0 ? temp : 0;
    }
    return rain;
};

// 单调栈
var trap = function(height) {
    const st = [0];// 存着下标，计算的时候用下标对应的柱子高度
    let rain = 0;
    for(let i = 1; i < height.length; i++){ // 只处理的情况三，其实是把情况一和情况二融合了
        while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
            const mid = st[st.length - 1];
            st.pop();
            if (st.length !== 0) {
                let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
                rain += h * w;
            }
        }
        st.push(i);
    }
    return rain;
};