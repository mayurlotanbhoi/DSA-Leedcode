/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let min = 1
    let max = 1
     let ans = nums[0]


     for(const num of nums){

        if(num < 0){
            [min, max] = [max, min]
        }

        max = Math.max(num, max*num)
        min = Math.min(num, min*num)

     ans = Math.max(ans,max )

     }

     return ans
    
};