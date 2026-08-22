/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
      const n = nums.length;
    const result = Array(n).fill(-1);
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {

        const index = i % n;

        while (
            stack.length > 0 &&
            stack.at(-1) <= nums[index]
        ) {
            stack.pop();
        }

        if (stack.length > 0) {
            result[index] = stack.at(-1);
        }

        stack.push(nums[index]);
    }

    return result;
};