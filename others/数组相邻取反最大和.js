// 小米(tmd思路和chatgpt一样但是只过了45%, 晕)

// 给定一个由整数组成的数组, 你可以选择两个相邻的数, 使其变为自身的相反数. 
// 操作的次数不限, 0取相反数依然是0. 请问数组元素最大和为多少?

function maxArraySum(arr) {
    let totalSum = 0;
    let minAbsValue = Infinity;
    let negativeCount = 0;

    // 计算绝对值和，同时记录负数的个数和最小绝对值
    for (let num of arr) {
        totalSum += Math.abs(num);  // 绝对值求和
        if (num < 0) {
            negativeCount++;
        }
        minAbsValue = Math.min(minAbsValue, Math.abs(num));  // 更新最小绝对值
    }

    // 如果负数的数量是奇数，则减去两倍最小绝对值
    if (negativeCount % 2 !== 0) {
        totalSum -= 2 * minAbsValue;
    }

    return totalSum;
}

// 示例
console.log(maxArraySum([-1, 2, -3, 4])); // 输出 10


// const len = parseInt(read_line());
// const arr = read_line().split(' ').map(Number);
// if(arr.length === 1){
//     console.log(arr[0]);
// }
// let lessThanZero = 0;
// let hasZero = false;
// const positiveArr = [];
// for(const n of arr){
//     if(n < 0) lessThanZero++;
//     if(n !== 0){
//         positiveArr.push(Math.abs(n));
//     }else{
//         hasZero = true;
//     }
// }
// let result = positiveArr.reduce((acc, cur) => acc + cur);
// if(lessThanZero % 2 === 1 && hasZero === false){
//     result -= Math.min(...positiveArr) * 2;
// }
// console.log(result);


// const len = parseInt(read_line());
// const arr = read_line().split(' ').map(Number);
// if(arr.length === 1){
//     console.log(arr[0]);
// }
// let lessThanZero = 0;
// let hasZero = false;
// let sum = 0;
// let min = 1;
// for(const n of arr){
//     if(n < 0) lessThanZero++;
//     if(n !== 0){
//         sum += Math.abs(n);
//         min = Math.min(min, Math.abs(n));
//     }else{
//         hasZero = true;
//     }
// }
// let result = sum;
// if(lessThanZero % 2 === 1 && hasZero === false){
//     result -= min * 2;
// }
// console.log(result);