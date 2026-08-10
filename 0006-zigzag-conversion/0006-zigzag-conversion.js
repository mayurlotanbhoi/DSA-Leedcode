/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows == 1 ) return s

    const res = new Array(numRows).fill('');
    let row = 0
    let dir = 1

    for(const ch of s){
       res[row] += ch

       if(row == 0){
          dir = 1
       }else if( row == numRows-1){
        dir = -1
       }
       row += dir

        
    }

    console.log(res)

    return res.join('')
    
};