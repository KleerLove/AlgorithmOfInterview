var nextGreaterElement = function(nums1, nums2) {
    const arr = new Array(nums2.length).fill(-1);
    const stack = [0];
    for(let i = 1; i < nums2.length; i++){
        while(stack.length && nums2[i] > nums2[stack[stack.length - 1]]){
            const top = stack.pop();
            arr[top] = nums2[i];
        }
        stack.push(i);
    }
    const ans = [];
    for(const n of nums1){
        ans.push(arr[nums2.indexOf(n)]);
    }
    return ans;
};