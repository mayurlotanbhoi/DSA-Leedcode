/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let vote = 0
    let candited = 0

    for(const candi of nums){

        if(vote === 0){
            candited = candi
        }

        if(candi ==  candited){
            vote++
        }else{
            vote --
        }
    }

    return candited
    
};