/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse = (arr, left, rigth) =>{
    while(left <= rigth){
        [arr[left], arr[rigth]] = [arr[rigth], arr[left]]
        rigth--
        left++
    }
    return arr
}

    const strArr = s.split(" ")
    let l = 0
    let r = strArr.length-1

    console.log(strArr)

    return reverse(strArr, l, r).filter(val => val).join(" ").trim()
    
};

