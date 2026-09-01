/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {

    let open =0
    let ans = 0

    for(const ch of s){

        if(ch == '('){
         open++
        }else {
         
         if(open > 0){
            open--
         }else{
            ans++
         }

        }
    }
    return ans+open
};