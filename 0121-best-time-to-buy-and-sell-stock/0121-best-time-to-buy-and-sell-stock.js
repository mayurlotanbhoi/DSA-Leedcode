/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let maxPro = 0
    
    for(const num of prices){
        
        if(num < min){
            min = num
        }else{
            maxPro = Math.max(maxPro, num-min)
        }
    }

    return maxPro
    
};