/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices || prices.length < 2) return 0;
    let maxPro = 0;
    for(let i=1;i<prices.length;i++){
        let diff = prices[i]-prices[i-1];
        if(diff > 0) {
            maxPro += diff;
        }
    }
    return maxPro;
};