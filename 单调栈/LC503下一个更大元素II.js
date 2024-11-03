var nextGreaterElements = function (nums) {
    const len = nums.length;
    // 用拼接方式模拟循环数组
    const newNums = nums.concat(nums);
    const result = new Array(newNums.length).fill(-1);
    const stack = [0];
    for (let i = 1; i < newNums.length; i++) {
        while (stack.length && newNums[i] > newNums[stack[stack.length - 1]]) {
            const top = stack.pop();
            result[top] = newNums[i];
        }
        stack.push(i);
    }
    return result.slice(0, len);
};

// 非拼接版本
var nextGreaterElements = function (nums) {
    const len = nums.length;
    const res = Array(len).fill(-1);
    const stack = [0];
    for (let i = 1; i < len * 2; i++) {
        while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = nums[i % len];
        }
        stack.push(i % len);
    }
    return res;
};