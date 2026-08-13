/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {

    let l = 0
    let r = s.length -1

    const ans = s.split("")

    while(l <= r){

        if(ans[l] != ans[r]){
            if(ans[l] < ans[r]){
                ans[r] = ans[l]
            }else{
                ans[l] = ans[r]
            }
        }
        l++
        r--
    }
    return ans.join("")
    
};