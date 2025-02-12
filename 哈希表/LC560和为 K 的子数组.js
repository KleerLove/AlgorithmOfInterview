/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;
    let sum = 0; // 当前的前缀和
    const map = new Map();
    map.set(0, 1); // 存储前缀和出现的次数, 初始化前缀和为0的次数为1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return result;
};

