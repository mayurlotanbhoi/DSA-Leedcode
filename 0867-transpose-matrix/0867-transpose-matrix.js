/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length

    const result = Array.from({length:col}, () => Array.from(row))

    for(let i=0; i<row;i++){
        for(let j =0; j<col;j++){
            result[j][i] = matrix[i][j]
        }

    }
    return result;
};