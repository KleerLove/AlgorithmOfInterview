/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let result = 0;
    for(const n of nums1){
        for(const m of nums2){
            const sum = n + m;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    for(const n of nums3){
        for(const m of nums4){
            const sum = n + m;
            if(map.has(-sum)){
                result += map.get(-sum);
            }
        }
    }
    return result;
};