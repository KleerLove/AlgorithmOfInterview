// 当前累加gas[i] - cost[i]的和curSum一旦小于0，起始位置至少要是i+1，因为从i之前开始一定不行
var canCompleteCircuit = function(gas, cost) {
    let start = 0
    let curSum = 0
    let totalSum = 0

    for(let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if(curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }

    return totalSum < 0 ? -1 : start;
};