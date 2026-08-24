/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    const frq = {}

    for(const ch of s){
        if(frq[ch]){
            frq[ch]+=1
        }else{
            frq[ch] = 1
        }
    }
    const object = Object.entries(frq).sort((a,b) => b[1] - a[1])

    let result = ""

    for(let i = 0; i< object.length; i++){

        for(let j = 0; j < object[i][1]-0; j++){
            result += object[i][0]
        }
    }

   return result
};