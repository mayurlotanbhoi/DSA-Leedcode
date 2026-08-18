/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const set = new Set(nums2)
    const result = new Set()

    for(const num of nums1){

        if(set.has(num)){
         result.add(num)   
        }
    }

return [...result]
    
};