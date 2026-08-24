/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length != t.length) return false
    const charStoT = {}
    const charTtoS = {}

    for(let i =0; i<s.length; i++){
        const charT = t[i]
        const charS = s[i]
        
        if(charStoT[charS] && charStoT[charS] != charT) return false

        if(charTtoS[charT] && charTtoS[charT] != charS) return false

        charStoT[charS] = charT
        charTtoS[charT] = charS
    }

    return true
    
};