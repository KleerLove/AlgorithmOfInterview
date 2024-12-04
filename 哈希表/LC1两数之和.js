function twoSum(nums, target) {
    const map = new Map(); // 用于存储数值和它的下标
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 计算当前数的补数
        if (map.has(complement)) {
            return [map.get(complement), i]; // 找到补数，返回下标
        }
        map.set(nums[i], i); // 否则将当前数和下标存入哈希表
    }
    return []; // 如果没有找到，返回空数组
}