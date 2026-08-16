/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

     const str = s.split("")

     const reverse = (l, r)=>{
        while(l < r){
            [str[l], str[r]] = [str[r], str[l]]
            l++
            r--
        }
     }

     for (let i = 0; i < str.length; i += 2 * k) {
        reverse(i, Math.min(i + k - 1, str.length - 1));
    }

     

     return str.join("")
    
};