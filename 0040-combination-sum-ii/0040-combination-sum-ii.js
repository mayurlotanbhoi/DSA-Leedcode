/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b)

    const result = []

    const dfs =(start, subset, sum)=>{


        if(sum === target){
            result.push([...subset])
            return
        }

        if(sum > target) return


        for(let i=start; i<candidates.length; i++){
            if(i > start && candidates[i] == candidates[i-1] ) continue;
            subset.push(candidates[i])
            dfs(i+1, subset, sum+candidates[i])
            subset.pop()
        }

    }

    dfs(0,[], 0)
    return result
    
};