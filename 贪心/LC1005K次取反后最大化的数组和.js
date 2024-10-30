var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length && k > 0; i++){
        const n = nums[i];
        if(n < 0){
            nums[i] = -n;
            k--;
        }else{
            break;
        }
    }
    let sum = nums.reduce((acc, cur) => acc + cur);
    if(k === 0 || k % 2 === 0){
        return sum;
    }else{
        return sum - 2 * Math.min(...nums);
    }
};