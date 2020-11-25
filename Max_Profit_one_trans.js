var maxProfit = function(prices) {
    if(prices.length < 2)
        return 0;
    
    var low = prices[0];
    var profit = 0;
    for(var i = 1; i< prices.length; i++) {
        if(low <= prices[i]) {
            const newProfit = prices[i] - low;
            profit = Math.max(profit, newProfit);
        } else {
            low = prices[i];
        }
    }
    return profit;
};

var input1 = [7,1,5,3,6,4]
var input2 = [7,6,4,3,1];

var r1 = maxProfit(input1);
console.log(r1);

var r2 = maxProfit(input2);
console.log(r2);