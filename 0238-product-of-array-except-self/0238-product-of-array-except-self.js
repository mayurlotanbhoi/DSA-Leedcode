/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length

    const left = new Array(n).fill(1)
    const rigth = new Array(n).fill(1)
    let produ = 1
    for(let i=0; i<n; i++){
      left[i] = produ
       produ *= nums[i]
    }
    produ = 1
    for(let j = n-1; j>=0; j--){
        rigth[j] = produ
        produ *= nums[j]
     
    }

    const result = []

    for(let i=0; i<n; i++){
        result.push(left[i] * rigth[i])
    }

    console.log(left)
    console.log(rigth)
     console.log(result)
    

    return result
    
};