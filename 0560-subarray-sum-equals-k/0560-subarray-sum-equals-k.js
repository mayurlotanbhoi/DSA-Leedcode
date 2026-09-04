/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let count = 0
    let curr = 0
    const map = new Map()
    map.set(0, 1)

    for(const num of nums){
        curr += num

        if(map.has(curr-k)){
            count += map.get(curr-k)
        }

        map.set(curr, (map.get(curr) || 0) +1)
    }

    return count
    
};