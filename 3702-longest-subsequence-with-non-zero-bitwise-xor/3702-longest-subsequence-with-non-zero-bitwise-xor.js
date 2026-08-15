/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {

    let xor = 0
    let isNonZero = false

    for(const num of nums){

        xor ^= num

        if(num !== 0){
            isNonZero = true
        }
    }

    if(!isNonZero){
        return 0
    }

    if(xor !== 0 ){
        return nums.length
    }

    return nums.length-1
    
};