/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let l = 0
    let e = s.length-1

    while(l <= e){
        [s[l],s[e]] = [s[e], s[l]]
        l++
        e--
    }
    return s
    
};