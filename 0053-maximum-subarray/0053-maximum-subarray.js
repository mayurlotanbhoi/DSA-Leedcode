/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let maxSum = nums[0]
    let currSum = nums[0]

    for(let i =1; i<nums.length; i++){
        currSum = Math.max(nums[i], currSum+nums[i])
        maxSum  = Math.max(currSum, maxSum)
    }

    return maxSum

    // let currSum = 0
    // let maxSum = -Infinity

    // for(num of nums){
        
    //     currSum += num

    //     if (currSum > maxSum){
    //         maxSum = currSum
    //     }

    //     if (currSum < 0){
    //         currSum = 0

    //     }
        
    // }

    // return maxSum
    
};