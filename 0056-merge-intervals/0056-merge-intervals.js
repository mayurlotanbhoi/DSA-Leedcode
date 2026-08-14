/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const merged = [intervals[0]]
    for(let i =1; i < intervals.length; i++){
        const lastlength = merged.length-1
        const lastElement = merged[lastlength][1]
        if(intervals[i][0] <= lastElement ){
           merged[lastlength][1] = Math.max(merged[lastlength][1], intervals[i][1])
        }else{
           merged.push(intervals[i]) 
        }
    }
    return merged
};