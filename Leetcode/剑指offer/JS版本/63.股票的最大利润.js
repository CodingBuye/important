var maxProfit = function(prices) {
    if(!prices || prices.length < 2) return 0;
    let min = prices[0];
    let maxDiff = prices[1]-min < 0 ? 0 : prices[1]-min;
    for(let i=2;i<prices.length;i++){
        if(prices[i-1] < min) {
            min = prices[i-1];
        }
        maxDiff = Math.max(maxDiff, prices[i] - min);
    }
    return maxDiff;
}