var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
    for(const n of set1){
        if(set2.has(n)){
            result.push(n);
        }
    }
    return result;
};

var intersection = function(nums1, nums2) {
    const arr = new Array(1001).fill(0);
    const resultSet = new Set();
    for(const n of nums1){
        arr[n]++;
    }
    for(const m of nums2){
        if(arr[m] !== 0){
            resultSet.add(m);
        }
    }
    return Array.from(resultSet);
};