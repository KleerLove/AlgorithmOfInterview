// 按照右边界排序，从左向右记录非交叉区间的个数。最后用区间总数减去非交叉区间的个数就是需要移除的区间个数
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])

    let count = 1
    let end = intervals[0][1]

    for(let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if(interval[0] >= end) {
            end = interval[1]
            count += 1
        }
    }
    
    return intervals.length - count
};