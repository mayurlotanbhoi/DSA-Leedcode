/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length == 0) return ""

    strs.sort()

    let  i= 0

    const first = strs[0]
    const last = strs[strs.length -1]


    while(i < first.length && i < last.length && first[i] === last[i]) { i++}

    return first.substring(0,i)
    
};