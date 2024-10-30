var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let arr = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const n = intervals[i];
        if (n[0] <= arr[1]) {
            arr[1] = Math.max(arr[1], n[1]);
        } else {
            result.push(arr);
            arr = n;
        }
    }
    result.push(arr);
    return result;
};