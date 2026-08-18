/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k = (m+n)-1
    let i = m-1
    let j=n-1
   
   while( i >= 0 && j >= 0){

    const inum = nums1[i]
    const jnum = nums2[j]

    if(inum < jnum){
     nums1[k] = jnum
     k--
     j--
    }else {
     nums1[k] = inum
     i--
     k--
    }
   }

   while( j >= 0){
    nums1[k] = nums2[j]
     j--
     k--
   }

   return nums1

};