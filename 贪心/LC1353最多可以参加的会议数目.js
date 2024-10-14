// 电信

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
    //如何选择某一天参加哪个会议：
    //如果会议A结束的比会议B早，那先参加会议A；
    //如果会议A和会议B同一天结束，那先参加开始的早的那个会议。

    //按结束时间排序，若结束时间一样，按开始时间排序
    events.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    let set = new Set();

    //先判断每个会议明显都可以参加的情况，即结束天数递增的情况

    let flag = true;
    for (let i = 1; i < events.length; i++) {
        if (events[i - 1][1] >= events[i][1]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return events.length;
    }
    for (let item of events) {
        for (let i = item[0]; i <= item[1]; i++) {
            if (!set.has(i)) {
                set.add(i);
                break;
            }
        }
    }
    return set.size;

};