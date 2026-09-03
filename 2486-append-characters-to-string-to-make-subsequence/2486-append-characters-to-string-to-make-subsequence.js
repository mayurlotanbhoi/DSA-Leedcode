/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {

    let i = 0
    let j = 0

    let sl = s.length
    let tl = t.length

    while(i < sl && j< tl){

        if(s[i] ==  t[j]){
            i++
            j++
        }else{
            i++
        }
    }

    return tl-j
    
};