var candy = function(ratings) {
    let candys = new Array(ratings.length).fill(1)

    // 从前向后, 如果该孩子比左边孩子高, 比左边孩子多一个
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candys[i] = candys[i - 1] + 1
        }
    }

    // 从后向前, 如果该孩子比右边孩子高, 比右边孩子多一个
    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i + 1] + 1)
        }
    }
    
    return candys.reduce((acc, cur) => acc + cur)
};