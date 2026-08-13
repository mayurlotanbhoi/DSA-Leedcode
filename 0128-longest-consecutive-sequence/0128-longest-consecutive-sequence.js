/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length == 0) return 0

    const set = new Set(nums)
    let longest = 1

    for(num of set){
       

        if(!set.has(num-1)){
            let next = num
             count = 1
            while(set.has(next+1)){
                next++
                count++
            }

        longest = Math.max(longest, count)
        }



    }
    return longest;
    
};