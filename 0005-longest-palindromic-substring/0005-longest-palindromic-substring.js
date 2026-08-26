/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    const expand = (s,l,h) =>{
        while(l >= 0 && h < s.length && s[l] == s[h]){
            l--
            h++
        }
        return s.slice(l+1,h)
    }
    let result = ""

    for(let i=0; i<s.length; i++){
        const odd = expand(s, i, i)
        const even = expand(s, i, i+1)

        if(odd.length >= result.length){
            result = odd
        }

        if(even.length >= result.length){
            result = even
        }
    }
    return result
};