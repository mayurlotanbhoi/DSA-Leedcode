/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const map = {}

    if(s.length != t.length) return false

    for(const ch of s){
     if(map[ch]){
        map[ch]+= 1
     }else{
        map[ch] = 1
     }
    }

    for(const ch of t){
     if(map[ch]){
        map[ch] -= 1
     }else{
        return false
     }
    }

    return Object.values(map).every(ch => ch == 0)
    
};