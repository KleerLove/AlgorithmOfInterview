var maxProfit = function(prices) {
    let result = 0;
    for(let i = 1; i < prices.length; i++){
        const profit = prices[i] - prices[i - 1];
        if(profit > 0) result += profit;
    }
    return result;
};