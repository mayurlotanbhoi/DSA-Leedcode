/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let  faster = 0

    for(let i=0; i< nums.length; i++){

        if(i > faster){
            return false
        }
        faster = Math.max(faster, i+nums[i])

        if(faster >= nums.length-1){
            return true
        }

    }
    return true
    
};